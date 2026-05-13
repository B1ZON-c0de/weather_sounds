import commonConfig from './webpack.common.js';
import { merge } from "webpack-merge";

export default merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3030,
    hot: true,
    open: true,
  }
})