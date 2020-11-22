'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue html https://www.yuque.com/easy-team/egg-vue/html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHardiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: {
    'html/simple': 'app/web/page/html/simple.vue',
    'html/spa': 'app/web/page/html/spa.vue'
  },
  plugins: [
    { imagemini: false },
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['runtime','common', 'html/spa'],
      filename: '../view/spa.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      chunks: ['runtime','common', 'html/simple'],
      filename: '../view/simple.tpl',
      template: './app/web/view/layout.tpl'
    }),
    new HtmlWebpackHardiskPlugin({
      outputPath: path.resolve(__dirname, 'app/view')
    })
  ]
};