#!/usr/bin/env bash
set -euo pipefail

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "${SCRIPT_RELATIVE_DIR}")

################################################################################

echo -en "Checking if jq is installed: "
if ! command -v jq &> /dev/null
then
    echo -e "\n 'jq' could not be found."
    exit 1
fi
echo "OK"

echo "Name of the script: $0"
echo "Total number of arguments: $#"
echo "Values of all the arguments: $@"
# Set input variables.
if [ -z "$1" ]
then
  echo "Please provide the output directory for the registry.";
  exit 1;
fi
if [ -z "$2" ]
then
  echo "Invalid existing registry. Provided: $1";
  exit 2;
fi
if [ "$3" = "true" ]
then
  skipCompression=$3;
else
  skipCompression="false";
fi

outputRegistry=$1;
existingRegistry=$2;
candidatesFile=$(mktemp)
temporaryWidgets=$(mktemp --directory)

################################################################################

yarn global add @js-widgets/webpack-cli@latest
OLD_CWD=$(pwd)
cd "${PROJECT_ROOT}"
find "src/apps" -maxdepth 2 -mindepth 2 -type f -name "*.widget.js" -print0 > "${candidatesFile}"

# TODO: refine the list of widgets to compile based on git changes.
echo "Starting compilation: $(date)"
# Compile all widgets in parallel. This will likely keep all cores occupied.
export WIDGETS_SKIP_COMPRESSION="${skipCompression}"
export NODE_ENV=production
while IFS= read -r -d $'\0' file; do
  name=$(basename "$(dirname "$file")")
  echo -e "\t * Processing widget: $name"
  dir="$temporaryWidgets/$name"
  rm --recursive --force "$dir" && mkdir --parents "$dir"
  js-widgets-webpack-cli \
    --existing-registry="$existingRegistry" \
    --output-dir="$dir" \
    --omit-missing \
    --widget-definitions="$file" \
    . > /dev/null &
done < "${candidatesFile}"
wait
echo "Compilation finished: $(date)"

rm "${candidatesFile}"

# Stitch the registry back together.
# Step 1. Gather all the assets.
mkdir --parents "${outputRegistry}/widgets"
find "${temporaryWidgets}" -maxdepth 3 -mindepth 3 -type d -wholename "*/widgets/*" -exec mv {} "${outputRegistry}/widgets" \;
# Step 2. Combine all the individual registries.
temporaryRegistry=$(mktemp)
echo "[" > "${temporaryRegistry}"
while IFS= read -r -d $'\0' registryFile; do
  jq ".[0]" < "${registryFile}" >> "${temporaryRegistry}"
  echo -en "," >> "${temporaryRegistry}"
done < <(find "${temporaryWidgets}" -maxdepth 2 -mindepth 2 -type f -print0 -name "registry.json")
echo "]" >> "${temporaryRegistry}"
sed "${temporaryRegistry}" -e "s:,\]$:]:g" |jq > "${outputRegistry}/registry.json"

# Final cleanup.
rm --recursive --force "${temporaryWidgets}"
cd "${OLD_CWD}"
