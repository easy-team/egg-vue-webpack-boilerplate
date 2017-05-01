'use strict';
const path = require('path');
const baseDir = path.resolve(__dirname, '../');

exports.webpackvue = {
  baseDir: baseDir,
  build: {
    path: 'public',
    publicPath: '/public/',
    prefix: 'static',
    entry: [path.join(baseDir, 'app/web/page')],
    commonsChunk: ['vendor']
  },
  webpack: {
    styleLoader: 'vue-style-loader',
    loaderOption: {
      sass: {
        includePaths: [path.join(baseDir, 'app/web/asset/style')]
      }
    },
    pluginOption: {
      ExtractTextPlugin: {
        extract: true
      }
    }
  }
};