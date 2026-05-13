import commonConfig from './webpack.common';
import { merge } from "webpack-merge";

export default merge(commonConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
})