const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

const isProd = process.env.NODE_ENV === "production";

const searchUrl = isProd
  ? "https://mf-search-app.netlify.app"
  : "http://localhost:3001";

const shellUrl = isProd
  ? "https://mf-shell-app.netlify.app"
  : "http://localhost:3000";

const checkoutAppUrl = isProd
  ? "https://mf-checkout-app.netlify.app"
  : "http://localhost:3002";

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";

      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.unshift(
        new ModuleFederationPlugin({
          name: "shell",
          filename: "remoteEntry.js",
          remotes: {
            search: `search@${searchUrl}/remoteEntry.js`,
            shell: `shell@${shellUrl}/remoteEntry.js`,
            checkout: `checkout@${checkoutAppUrl}/checkoutRemoteEntry.js`
          },
          exposes: {
            "./cart-store": "./src/components/shared/stores/cart/cart-store"
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"]
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: deps["react-router-dom"]
            }
          }
        })
      );

      return config;
    }
  }
};
