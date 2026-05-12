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
          from: "public/*.png",
          to: "[name]-[contenthash][ext]",
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
        }, "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/source",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp3|wav|ogg)$/i,
        type: "asset/resource",
      }
    ]
  }
}