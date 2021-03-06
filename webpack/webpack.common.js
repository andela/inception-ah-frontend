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
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      "<src>": path.resolve(__dirname, "../src"),
      "<actions>": path.resolve(__dirname, "../src/actions"),
      "<api>": path.resolve(__dirname, "../src/api"),
      "<assets>": path.resolve(__dirname, "../src/assets"),
      "<components>": path.resolve(__dirname, "../src/components"),
      "<constants>": path.resolve(__dirname, "../src/constants"),
      "<pages>": path.resolve(__dirname, "../src/pages"),
      "<reducers>": path.resolve(__dirname, "../src/reducers"),
      "<utils>": path.resolve(__dirname, "../src/utils")
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
