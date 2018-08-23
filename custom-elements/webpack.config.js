const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkgJson = require('./package.json');

let config = {
  entry: {
    'custom-elements': path.resolve(__dirname, 'src'),
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'custom-elements.js',
    // library: pkgJson.name,
    libraryTarget: 'umd',
    // umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { ignoreDiagnostics: [2551, 2554, 2339] }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.scss$/,
        use:['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: { 
      'oneview-custom-element': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts']
  },
  devtool: '#source-map',
  plugins: [
    // new CleanWebpackPlugin(['dist/*']),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  config = Object.assign(config, {
    entry: {
      demo: path.resolve(__dirname, 'demo')
    },
    // output: {
    //   path: path.resolve(__dirname, './dist'),
    //   filename: '[name].js'
    // },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'demo/index.html',
        inject: true
      })
    ]
  });
}

module.exports = config;