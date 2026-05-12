const path = require("node:path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");


const rootDir = path.resolve(__dirname, "..");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name]-[contenthash].js',
    clean: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(rootDir, "public/*.png"),
          to: path.resolve(rootDir, "dist"),
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public/index.html"),
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            url: false
          }
        }, "sass-loader"],
      },
    ]
  }
}