const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./app/components/home/index.js",
    plp: "./app/components/plp/index.js",
    cart: "./app/components/cart/index.js",
    login: "./app/components/login/index.js",
    header: "./app/components/header/index.js",
    register: "./app/components/register/index.js"
  },
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),   
     filename: "[name].bundle.[chunkhash].js"
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
      filename: "index.html",
      chunks: ['index'],
      template: "app/components/home/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "cart.html",
      chunks: ['cart'],
      template: "app/components/cart/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "header.html",
      chunks: ['header'],
      template: "app/components/header/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      chunks: ['login'],
      template: "app/components/login/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      chunks: ['register'],
      template: "app/components/register/index.html"
    })
  ]
};
