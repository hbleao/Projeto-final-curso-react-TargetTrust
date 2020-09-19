const htmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    port: 3000,
    overlay: true,
    open: true,
    writeToDisk: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./template/index.dev.html",
    }),
  ],
});
