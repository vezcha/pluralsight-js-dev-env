/* eslint-disable no-mixed-spaces-and-tabs */

import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map',
  //noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true
      }),
	  //Eliminate dpublicate packages when generating bundle
	 // new webpack.optimize.DedupePlugin(),
	  //Minify JS
	 // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}