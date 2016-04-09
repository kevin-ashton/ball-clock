var path = require('path');

module.exports = {
  entry: {
    './src/bundle': './src/app'
  },
  output: {
    path: './',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
    ]
  }
};
