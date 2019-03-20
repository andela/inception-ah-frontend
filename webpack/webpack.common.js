const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const { appDirectory, buildDirectory } = require("./filePaths");

module.exports = {
  entry: {
    bundle: `${appDirectory}/index.jsx`
  },
  output: {
    path: buildDirectory,
    filename: "build.bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      // {
      //   test: /\.s?[ac]ss$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     { loader: "css-loader", options: { url: false, sourceMap: true } },
      //     { loader: "sass-loader", options: { sourceMap: true } }
      //   ]
      // },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-arrow-functions"
              ]
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "<Pages>": path.resolve(__dirname, "../src/pages"),
      "<Components>": path.resolve(__dirname, "../src/components"),
      "<Common>": path.resolve(__dirname, "../src/components/common"),
      "<Auth>": path.resolve(__dirname, "../src/components/Auth")
    },
    extensions: [" ", ".js", ".jsx"]
  },
  plugins: [
    new cleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new htmlWebpackPlugin({
      template: `${appDirectory}/index.html`,
      filename: `${buildDirectory}/index.html`
    })
  ]
};
