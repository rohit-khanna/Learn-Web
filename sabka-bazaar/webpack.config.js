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
    // filename: "[name].bundle.[hash].js",
    chunkFilename: '[name].bundle.js',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
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
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "plp.html",
      chunks: ['plp'],
      template: "app/components/plp/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "home.html",
      chunks: ['home'],
      template: "app/components/home/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "cart.html",
      chunks: ['cart'],
      template: "app/components/cart/index.html"
    })
  ]
};
