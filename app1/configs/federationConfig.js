const dependencies = require('../package.json').dependencies;
module.exports = {
  name: 'app1',
  filename: 'remoteEntry.js',
  exposes: {
    './App1Home': './src/pages/Home',
  },
  shared: {
    // ...dependencies,
    '@reduxjs/toolkit': {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-redux': {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    redux: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
