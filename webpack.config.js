'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
module.exports = {
  plugins: {
    imagemini: false,
    html: {
      name: new HtmlWebpackPlugin({
        path: __dirname + './dist',
      })
    },
    skeleton: {
      name: new SkeletonPlugin({
        pathname: path.resolve(__dirname, './dist/shell'), // the path to store shell file
        staticDir: path.resolve(__dirname, './dist'), // the same as the `output.path`
        routes: ['/'],
        port: '8080',
      })
    }
  },
};