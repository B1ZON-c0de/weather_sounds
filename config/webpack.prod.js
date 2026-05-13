import commonConfig from './webpack.common.js';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { merge } from "webpack-merge";

export default merge(commonConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(),new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: "single",
  }
})