const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
//   devtool: 'eval-source-map',

  devServer: {
      watchFiles: ['./src/template.html'],
      static: './dist',
      port: 8080,
      open: true,
      // devMiddleware: {
      //     writeToDisk: true, // Enable writing to the disk during `serve`
      // },
  },
});