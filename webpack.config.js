const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  //   mode: "development",
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist"
  }
};
