const htmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
  },
  module: {
    rules: [],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./template/index.prod.html",
    }),
  ],
});
