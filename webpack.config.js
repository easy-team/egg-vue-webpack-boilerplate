'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  target: 'web',
  entry: {
    app: 'app/web/page/admin/index.js'
  },
  output: {
    path: path.join(__dirname, 'app/public'),
    publicPath: '/public/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['runtime','common', 'app'],
      filename: '../view/app.tpl',
      template: './app/web/view/layout.tpl'
    }),
  ]
};