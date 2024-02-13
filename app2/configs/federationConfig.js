const dependencies = require('../package.json').dependencies;
module.exports = {
  name: 'app2',
  filename: 'remoteEntry.js',
  exposes: {
    './App2Home': './src/pages/Home',
  },
  // remotes: {
  //   host: `host@http://localhost:4000/remoteEntry.js`,
  // },
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
