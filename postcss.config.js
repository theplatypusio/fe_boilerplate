module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-inline-svg': {
      paths: ['./src/assets/icons', './src/assets'],
    },
    'postcss-svgo': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
};
