const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],
  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts"] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'assets/images/[name][ext]'
  },
};
