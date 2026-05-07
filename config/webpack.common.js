const path = require("node:path");
const CopyPlugin = require("copy-webpack-plugin");


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
        }
      ]
    }),
  ]
}