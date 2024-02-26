const dependencies = require("../package.json").dependencies;
module.exports = {
  name: "storeApp",
  filename: "remoteEntry.js",
  exposes: {
    "./store": "./src/store",
  },
  shared: {
    // ...dependencies,
    "@reduxjs/toolkit": {
      singleton: true,
      requiredVersion: dependencies["@reduxjs/toolkit"],
    },
    "react-redux": {
      singleton: true,
      requiredVersion: dependencies["react-redux"],
    },
    redux: {
      singleton: true,
      requiredVersion: dependencies["redux"],
    },
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "redux-micro-frontend": {
      singleton: true,
      requiredVersion: dependencies["redux-micro-frontend"],
    },
  },
};
