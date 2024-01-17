const reactScriptsWebpackConfigBuilder = require('react-scripts/config/webpack.config');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = {
  register: ['../src/apps/**/*.widget.js'],
  webpackFinal: ({
    entry,
    output,
    target,
    mode,
    devtool,
    profile,
    plugins,
    externals,
    externalsType,
    externalsPresets,
  }) => {
    const craConfig = reactScriptsWebpackConfigBuilder(mode);
    const config = merge(craConfig, {
      entry,
      output,
      target,
      mode,
      devtool,
      profile,
      externals,
      externalsType,
      externalsPresets,
    });
    const isEnvProduction = config.mode === 'production';
    const skipCompression = process.env.WIDGETS_SKIP_COMPRESSION === 'true';

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@formatjs/icu-messageformat-parser'] =
      '@formatjs/icu-messageformat-parser/no-parser';

    config.plugins = config.plugins || [];
    const ignoredPlugins = [
      'HtmlWebpackPlugin',
      'WebpackManifestPlugin',
      'InlineChunkHtmlPlugin',
      'InterpolateHtmlPlugin',
    ];
    config.plugins = config.plugins.filter(
      (plugin) => ignoredPlugins.indexOf(plugin.constructor.name) === -1,
    );
    // There is a plugin that will copy the thumbnail from the app to the final
    // location coming from the default config.
    const copyPlugin = plugins.find(
      (plugin) => plugin.constructor.name === 'CopyPlugin',
    );
    if (copyPlugin) {
      config.plugins.push(copyPlugin);
    }
    const definePluginIndex = config.plugins.findIndex(
      (plugin) => plugin.constructor.name === 'DefinePlugin',
    );
    config.plugins[definePluginIndex].definitions[
      'process.env'
    ].PUBLIC_ASSETS_URL = JSON.stringify(process.env.PUBLIC_ASSETS_URL);

    config.plugins.unshift(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    );

    config.cache = { type: isEnvProduction ? 'filesystem' : 'memory' };
    return fixOutputPaths(config);
  },
  externalPeerDependencies: {
    react: {
      src: 'https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js',
      external: 'React',
    },
    'react-dom': {
      src: 'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js',
      external: 'ReactDOM',
    },
    'react-intl': {
      src: 'https://cdn.jsdelivr.net/npm/react-intl@5/dist/react-intl.min.js',
      external: 'ReactIntl',
    },
  },
};

/**
 * Fix the CSS extraction paths.
 *
 * @param {Object} config
 *   The webpack configuration.
 *
 * @return {Object}
 *   The altered webpack configuration.
 */
function fixOutputPaths(config) {
  // See if there is a Mini CSS Extract plugin.
  const miniCssIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
  );
  if (miniCssIndex !== -1) {
    config.plugins[miniCssIndex].options.filename =
      '[name]/css/main.[contenthash:8].css';
    config.plugins[miniCssIndex].options.chunkFilename =
      '[name]/css/main.[contenthash:8].chunk.css';
  }
  config.module.rules[1].oneOf[2].use[1].options.outputPath = (
    url,
    resourcePath,
    context,
  ) => {
    const relativePath = resourcePath.substring(`${context}/src/apps/`.length);
    const parts = relativePath.split('/');
    const widgetId = parts[0];
    return `../static/${widgetId}/${url}`;
  };
  config.module.rules[1].oneOf[2].use[1].options.name =
    'assets/[name].[hash].[ext]';
  config.output.assetModuleFilename = '../static/assets/[name].[hash][ext]';
  return config;
}
