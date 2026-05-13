import path from "node:path";
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from "webpack";
import "webpack-dev-server"


const rootDir = path.resolve(__dirname, "..");

const config: webpack.Configuration = {
  entry: './src/index.ts',
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
        use: [ MiniCssExtractPlugin.loader, {
          loader: "css-loader",
        }, "sass-loader" ],
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
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js" ]
  }
}
export default config;