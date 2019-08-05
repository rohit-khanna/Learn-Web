const path = require("path");

module.exports = {
  entry: "./src/UI/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map"
};
