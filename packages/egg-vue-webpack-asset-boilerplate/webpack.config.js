'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue asset 前端渲染 https://www.yuque.com/easy-team/egg-vue/asset
const path = require('path');

module.exports = {
  entry: {
    'asset/simple': 'app/web/page/asset/simple.vue',
    'asset/spa': 'app/web/page/asset/spa.vue'  
  },
  plugins: [
    { imagemini: false }
  ]
};