const path = require('path');

module.exports = {
  mode: 'development',
  entry: './website/js/example.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../website/public/js/')
  }
};
