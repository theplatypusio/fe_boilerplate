/* eslint-disable no-param-reassign */

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      if (options.config.env.DEBUG_BUILD) {
        config.devtool = 'source-map';
        config.optimization.minimize = false;
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};
