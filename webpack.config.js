const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 다중 entry point일 경우 entry property에 name: entry file 객체로 생성
module.exports = {
  mode: 'development',
  entry: {
    react: './src/index.js'
  },
  // npm install -D css-loader style-loader
  // npm install -D file-loader
  // npm install -D babel-loader @babel/core @babel/preset-env @babel/cli @babel/preset-react
  // npm install -D @babel/polyfill
  // npm install -D react react-dom
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
      },

      {
        test: /\.m?js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }

    ]
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: path.resolve(__dirname, 'dist')
  },
  // npm install --save-dev html-webpack-plugin
  // npm install --save-dev clean-webpack-plugin
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  //   new HtmlWebpackPlugin({
  //     title: 'Output Management'
  //   })
  // ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  }

}
