const webpack = require("webpack");
const path = require("path");
const HtmlWebPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_ENDPOINT": JSON.stringify(
        "https://mock-api.dev.CLIENT.com/"
      ),
      "process.env.API_KEY": "KEY",
      "process.env.MAP_API_URL": JSON.stringify(
        "https://maps.googleapis.com/maps/api/js?v=3.exp&key=" +
          "KEY" +
          "&libraries=geometry,drawing,places"
      ),
      "process.env.PLACES_API_URL": JSON.stringify(
        "https://restcountries.eu/rest/v2/name/<SEARCH>?fields=name"
      )
    }),
    new HtmlWebPlugin({
      template: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
