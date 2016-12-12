'use strict';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
var plugins = require('./plugins');

var config = webpackMerge(commonConfig, {
  devtool: false,

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  module: {
    rules: [
      {
        test: /\.ts$/, loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader']
      }
    ]
  },

  plugins: plugins.prodPlugins
});

config.plugins.push(plugins.commonChunksPlugin());

module.exports = config;
