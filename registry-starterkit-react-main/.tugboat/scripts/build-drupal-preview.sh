#!/usr/bin/env bash
set -euxo pipefail

cd $TUGBOAT_ROOT
yarn install
"${TUGBOAT_ROOT}/scripts/compile-all.sh"
WIDGET_REGISTRY_DIR="${DRUPAL_DOCROOT}/sites/default/files/widget-registry"
rm --recursive --force "${WIDGET_REGISTRY_DIR}"
mkdir --parents "${WIDGET_REGISTRY_DIR}/static"
mkdir --parents "${WIDGET_REGISTRY_DIR}/translations"

# Find all the folders with the name "public" and copy them to the newly created location.
while IFS= read -r -d $'\0' directory; do
  # From /path/to/src/apps/my-widget/public to ${WIDGET_REGISTRY_DIR}/static/my-widget
  destination=$(echo "${directory}" |sed -e 's:.*/apps/::g' -e 's:/public::g')
  cp --recursive "$directory" "${WIDGET_REGISTRY_DIR}/static/$destination"
done < <(find "${TUGBOAT_ROOT}/src/apps" -maxdepth 2 -mindepth 1 -type d -name public -print0)
# Find all the folders with the name "compiledStrings" and copy them to the temporary directory.
while IFS= read -r -d $'\0' directory; do
  # From /path/to/src/apps/my-widget/locales/compiledStrings/es.json to ${WIDGET_REGISTRY_DIR}/translations/my-widget/es.json
  destination=$(echo "${directory}" |sed -e 's:.*/apps/::g' -e 's:/locales/compiledStrings::g')
  cp --recursive "$directory" "${WIDGET_REGISTRY_DIR}/translations/$destination"
done < <(find "${TUGBOAT_ROOT}/src/apps"  -type d -name compiledStrings -print0)

DEBUG=*,-babel*,-eslint* \
NODE_ENV=production \
PUBLIC_URL="${TUGBOAT_SERVICE_URL}sites/default/files/widget-registry" \
PUBLIC_ASSETS_URL="${TUGBOAT_SERVICE_URL}sites/default/files/widget-registry/static" \
yarn dlx @js-widgets/webpack-cli \
  --debug \
  --existing-registry="https://js-widgets.github.io/registry-starterkit-react/development/widget-registry/registry.json" \
  --output-dir="${WIDGET_REGISTRY_DIR}" \
  "${TUGBOAT_ROOT}"

perl -pe "s@https\://js-widgets\.github\.io\/registry-starterkit-react/development/widget-registry@${TUGBOAT_SERVICE_URL}sites/default/files/widget\-registry@g" "${WIDGET_REGISTRY_DIR}/registry.json" > "${WIDGET_REGISTRY_DIR}/corrected-registry.json"

# Set the widget registry to pull from Tugboat.
cd "${DRUPAL_COMPOSER_ROOT}"
vendor/bin/drush --yes entity:delete widget_instance
vendor/bin/drush --yes entity:delete widget_type
vendor/bin/drush --yes entity:delete widget_registry_source
vendor/bin/drush --yes php:eval "\Drupal\widget_type\Entity\WidgetRegistrySource::create(['status' => TRUE, 'endpoint' => '${TUGBOAT_SERVICE_URL}sites/default/files/widget-registry/corrected-registry.json', 'id' => '${TUGBOAT_PREVIEW_ID}', 'label' => 'Ephemeral Registry ${TUGBOAT_PREVIEW_REF}'])->save();"
vendor/bin/drush --yes config-set system.site page.front /user/login?destination=/admin/content/interactive-components/widget-instance
