const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { buildDirectory } = require("./filePaths");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 8000,
    contentBase: buildDirectory
  }
});
