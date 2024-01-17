#!/usr/bin/env bash
set -euo pipefail

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(realpath "$(dirname "${SCRIPT_RELATIVE_DIR}")")

allLanguages=("ar" "de" "en" "es" "fr" "it" "ja" "ko" "pl" "pt" "ru" "tr" "zh")

FG_C='\033[1;37m'
WBG_C='\033[43m'
NO_C='\033[0m'
echo -e ""
echo -e "${FG_C}${WBG_C}                                                     ${NO_C}"
echo -e "${FG_C}${WBG_C}          ALL MESSAGES WILL BE OVERWRITTEN           ${NO_C}"
echo -e "${FG_C}${WBG_C}      Make sure to check git to see the changes      ${NO_C}"
echo -e "${FG_C}${WBG_C}                                                     ${NO_C}"
echo -e ""

while IFS= read -r -d $'\0' messages_path; do
  app_path=$(dirname "${messages_path}");
  echo -e "⏳ Extracting messages for ${app_path}."
  for language in "${allLanguages[@]}"
  do
    yarn formatjs extract "${app_path}/**/*.tsx" "${app_path}/**/*.ts" "${app_path}/**/*.jsx" "${app_path}/**/*.js" --out-file "${messages_path}/extractedStrings/${language}.json" --id-interpolation-pattern "[sha512:contenthash:base64:6]" > /dev/null &
  done
  wait
  echo -e "✅ Successfully extracted strings from the code in ${app_path}.\n"
done < <(find "${PROJECT_ROOT}/src/apps" -mindepth 2 -maxdepth 2 -type d -name locales -print0)

