const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

const isProd = process.env.NODE_ENV === "production";

const shellUrl = isProd
  ? "https://mf-shell-app.netlify.app"
  : "http://localhost:3000";

const searchAppUrl = isProd
  ? "https://mf-search-app.netlify.app"
  : "http://localhost:3001";

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";

      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.unshift(
        new ModuleFederationPlugin({
          name: "search",
          filename: "remoteEntry.js",
          remotes: {
            shell: `shell@${shellUrl}/remoteEntry.js`,
            search: `search@${searchAppUrl}/remoteEntry.js`,
          },
          exposes: {
            "./FeaturedProducts": "./src/components/shared/FeaturedProducts",
            "./SearchPage": "./src/components/shared/SearchPage",
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: deps["react-router-dom"],
            },
          },
        })
      );

      return config;
    },
  },
};
