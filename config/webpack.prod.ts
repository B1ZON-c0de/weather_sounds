const commonConfig = require('./webpack.common.ts')
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
})