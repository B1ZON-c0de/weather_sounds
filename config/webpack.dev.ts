const commonConfig = require('./webpack.common')
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3030,
    hot: true,
    open: true,
  }
})