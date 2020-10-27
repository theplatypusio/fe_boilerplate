/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      config.resolve = {
        modules: [...config.resolve.modules, './src'],
        extensions: [...config.resolve.extensions, '.ts', '.tsx', '.js'],
        alias: {
          ...config.resolve.alias,
          __generated__: path.resolve('src/__generated__'),
          assets: path.resolve('src/assets'),
          components: path.resolve('src/components'),
          constants: path.resolve('src/constants'),
          gql: path.resolve('src/gql'),
          pages: path.resolve('src/pages'),
          state: path.resolve('src/state'),
          styles: path.resolve('src/styles'),
          typings: path.resolve('src/typings'),
          utils: path.resolve('src/utils'),
          i18n: path.resolve('./i18n'),
        },
      };

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};
