const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.jsx$/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
