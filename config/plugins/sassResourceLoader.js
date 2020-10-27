const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
// Utils
const { findLoader } = require('../utils');

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      const scssLoader = findLoader('scss', config.module.rules);

      scssLoader.use.push({
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve('src/styles/variables/variables.scss'),
        },
      });

      config.plugins = [
        ...config.plugins,
        // Supress Warning from mini-css-extract-plugin - Read More here:
        // https://spectrum.chat/next-js/general/conflicting-order-between~25834bb9-fe91-44dd-ba47-b016b6518d67
        new FilterWarningsPlugin({
          exclude: /Conflicting order between:/,
        }),
      ];

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};
