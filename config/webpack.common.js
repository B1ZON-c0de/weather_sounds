const path = require("node:path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
          from: path.resolve(rootDir, "public/assets"),
          to: path.resolve(rootDir, "dist/assets"),
        },
        {
          from: path.resolve(rootDir, "public/fonts"),
          to: path.resolve(rootDir, "dist/fonts"),
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public/index.html"),
    }),
    new MiniCssExtractPlugin()
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