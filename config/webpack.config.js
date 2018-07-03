const path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: /*'production',*/'development',
  target: 'web', // enum
  entry: './website/js/modules.js',
  //devtool:false,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../website/js/build/')
  },
  // externals: {
  //   jquery: 'jQuery'
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    
  }

};
