const path = require("path");
const isDev = process.env.NODE_ENV !== "production";
module.exports = {
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  entry: {
    main: ["./src/renderers/dom.js"],
  },
  output: {
    path: path.resolve("public", "bundles"),
    filename: isDev ? "[name].js" : "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};