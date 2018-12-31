const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    home: "./app/components/home/index.js",
    plp: "./app/components/plp/index.js",
    cart: "./app/components/cart/index.js"

  },
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"])
    // ,    new HtmlWebpackPlugin({
    //   title: "Custom template",
    //   template: "index.html"
    // }),
    // new HtmlWebpackPlugin({
    //   title: "Custom template",
    //   filename: "home.html",
    //   template: "home.html"
    // })
  ]
};
