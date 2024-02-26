const dependencies = require("../package.json").dependencies;

const federationConfig = ({ APP1, APP2 }) => {
  return {
    name: "Host",
    filename: "remoteEntry.js",

    remotes: {
      app1: `app1@${APP1}/remoteEntry.js`,
      app2: `app2@${APP2}/remoteEntry.js`,
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
};

module.exports = federationConfig;
