#!/usr/bin/env bash
set -euo pipefail

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "${SCRIPT_RELATIVE_DIR}")

while IFS= read -r -d $'\0' app; do
  echo -e "⏳ Compiling translations for ${app}."
  while IFS= read -r -d $'\0' file; do
    yarn formatjs compile "$file" --ast --out-file "${file//extractedStrings/compiledStrings}" > /dev/null &
  done < <(find "${app}" -mindepth 1 -type f -name "*.json" -print0)
  wait
  echo -e "✅ Successfully compiled translations for ${app}.\n"
done < <(find "${PROJECT_ROOT}/src/apps/" -type d -name extractedStrings -print0)

echo "✅ Sucessfully compiled all translations ✅ "
