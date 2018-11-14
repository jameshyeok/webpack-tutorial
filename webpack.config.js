const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 다중 entry point일 경우 entry property에 name: entry file 객체로 생성
module.exports = {

  entry: {
    init: './src/index.js',
    css: './src/css.js'
  },
  // npm install --save-dev css-loader style-loader
  // npm install --save-dev file-loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  // npm install --save-dev html-webpack-plugin
  // npm install --save-dev clean-webpack-plugin
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }

}
