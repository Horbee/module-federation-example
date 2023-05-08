const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const isDev = process.env.NODE_ENV === "development";

// remote keys are the name of the federated module: e.g: search

const searchAppUrl = isDev
  ? "http://localhost:3001"
  : "https://mf-search-app.netlify.app";

const shellAppUrl = isDev
  ? "http://localhost:3000"
  : "https://mf-shell-app.netlify.app";

const checkoutAppUrl = isDev
  ? "http://localhost:3002"
  : "https://mf-checkout-app.netlify.app/";

const config = {
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "checkout",
          filename: "checkoutRemoteEntry.js",
          remotes: {
            search: `search@${searchAppUrl}/remoteEntry.js`,
            shell: `shell@${shellAppUrl}/remoteEntry.js`,
            checkout: `checkout@${checkoutAppUrl}/checkoutRemoteEntry.js`,
          },
          exposes: {
            "./Navigation": "./src/shared/Navigation",
            "./CheckoutPage": "./src/shared/Checkout",
          },
          shared: {
            ...deps,
            react: {
              eager: true,
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: deps["react-router-dom"],
            },
          },
        }),
      ],
    },
  },
};

module.exports = config;

// {
//   webpack: {
//     configure(webpackConfig, { env, path }) {
//           return webpackConfig;
//     }
//   }
// };
