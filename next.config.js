const path = require('path');

// Initial DotEnv
require('dotenv').config();

const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants');
const { withPlugins } = require('next-compose-plugins');
const withImages = require('next-images');
const withOffline = require('next-offline');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const packageJson = require('./package.json');
// Custom Pluigns
const withBrowserSync = require('./config/plugins/browserSync');
const withCircularDependency = require('./config/plugins/circularDependency');
const withCommonChunks = require('./config/plugins/commonChunks');
const withDevServer = require('./config/plugins/devServer');
const withPathResolver = require('./config/plugins/pathResolve');
const withSassResourceLoader = require('./config/plugins/sassResourceLoader');
const withSvgr = require('./config/plugins/svgr');
const withHeaders = require('./config/plugins/header');

// next.js configuration
const nextConfig = {
  env: {
    BROWSER_SYNC: process.env.BROWSER_SYNC === 'true',
    DEBUG_BUILD: process.env.DEBUG_BUILD === 'true',
  },
  publicRuntimeConfig: {
    APP_VERSION: packageJson.version,
    ENV: process.env.ENV,
  },
};

module.exports = withPlugins(
  [
    [withHeaders],
    // Webpack Config Resolve
    [withPathResolver, {}, [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD]],
    // Sass Resource Loader
    [withSassResourceLoader, {}, [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD]],
    // BrowserSync
    [withDevServer, {}, [PHASE_DEVELOPMENT_SERVER]],
    // BrowserSync
    [withBrowserSync, {}, [PHASE_DEVELOPMENT_SERVER]],
    // Circular Dependency
    [withCircularDependency, {}, [PHASE_DEVELOPMENT_SERVER]],
    // Inline SVG Support
    withSvgr,
    // Images
    [
      withImages,
      {
        exclude: path.resolve(__dirname, 'src/assets/icons'),
      },
    ],
    // Bundle Analyzer
    [withBundleAnalyzer, {}, [PHASE_PRODUCTION_BUILD]],
    // Common Chunks
    [withCommonChunks, {}, [PHASE_PRODUCTION_BUILD]],
    // CSS
    [withCss],
    // Sass
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          sourceMap: false,
          localIdentName: '[name]__[local]--[hash:base64:3]',
        },
        [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
          cssLoaderOptions: {
            localIdentName: 's[hash:base64:4]',
          },
        },
      },
    ],
    // PWA Service Worker - (Offline)
    [
      withOffline,
      {
        async rewrites() {
          return [
            {
              source: '/service-worker.js',
              destination: '/_next/static/service-worker.js',
            },
            {
              source: '/service-worker.js.map',
              destination: '/_next/static/service-worker.js.map',
            },
          ];
        },
        workboxOpts: {
          swDest: 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^(http|https)?.*/,
              handler: 'NetworkFirst',
            },
          ],
        },
      },
      [PHASE_PRODUCTION_BUILD],
    ],
  ],
  nextConfig,
);
