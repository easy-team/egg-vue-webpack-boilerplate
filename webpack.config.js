'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue: https://www.yuque.com/easy-team/egg-vue 
module.exports = {
  entry: {
    'index/index': 'app/web/page/index/index.vue',
    'category/category': 'app/web/page/category/category.vue',
    'about/about': 'app/web/page/about/about.vue',
    'admin/home/home': 'app/web/page/admin/home/home.vue',
    'admin/login/login': 'app/web/page/admin/login/login.vue',
  },
  plugins: [
    { imagemini: false }
  ]
};