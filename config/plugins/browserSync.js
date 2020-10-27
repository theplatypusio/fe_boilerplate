/* eslint-disable no-param-reassign */
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      if (!options.isServer) {
        config.plugins = [
          ...config.plugins,
          ...(options.config.env.BROWSER_SYNC
            ? [
                new BrowserSyncPlugin(
                  {
                    host: 'localhost',
                    port: 3300,
                    proxy: 'http://localhost:3000',
                    injectFileTypes: ['*.ts', '*.tsx', '*.js', '*.tsx', '*.scss'],
                    ui: {
                      port: 3301,
                    },
                  },
                  {
                    reload: false,
                  },
                ),
              ]
            : []),
        ];
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};
