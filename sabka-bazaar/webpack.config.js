const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    home: "./UI/components/home/index.js"
  },
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
    //   {
    //     test: /\.scss$/,
    //     use: [
    //       "style-loader", // creates style nodes from JS strings
    //       "css-loader", // translates CSS into CommonJS
    //       "sass-loader" // compiles Sass to CSS, using Node Sass by default
    //     ]
    //   },
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
