const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "src"),
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    open: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    }),
    new CleanWebpackPlugin()
  ],
  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts"] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
