'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue: https://www.yuque.com/easy-team/egg-vue 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHardiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: {
    'blog/home': 'app/web/page/blog/home/index.vue',
    'blog/category': 'app/web/page/blog/category/category.vue',
    'blog/about': 'app/web/page/blog/about/about.vue',
    'admin/home/home': 'app/web/page/admin/home/home.vue',
    'admin/login/login': 'app/web/page/admin/login/login.vue',
    // 单页面前端渲染 https://www.yuque.com/easy-team/egg-react/web
    spa: 'app/web/page/spa/index.js',
    // html 前端渲染 https://www.yuque.com/easy-team/egg-react/html
    'html/simple': 'app/web/page/html/simple.vue',
    'html/spa': 'app/web/page/html/spa.js',
    // asset 前端渲染 https://www.yuque.com/easy-team/egg-react/asset
    'asset/simple': 'app/web/page/asset/simple.vue',
    'asset/spa': 'app/web/page/asset/spa.js',
    'test': 'app/web/page/test/test.vue'
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