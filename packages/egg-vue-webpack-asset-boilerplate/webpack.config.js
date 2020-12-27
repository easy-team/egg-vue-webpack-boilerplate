'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue asset 前端渲染 https://www.yuque.com/easy-team/egg-vue/asset
const path = require('path');

module.exports = {
  target: 'web',
  entry: {
    'asset/simple': 'app/web/page/asset/simple.vue',
    'asset/spa': 'app/web/page/asset/spa.js'  
  }
};