'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue: https://www.yuque.com/easy-team/egg-vue 

module.exports = {
  entry: {
    'blog/home': 'app/web/page/blog/home/index.vue',
    'blog/category': 'app/web/page/blog/category/category.vue',
    'blog/about': 'app/web/page/blog/about/about.vue'
  },
  plugins: [
    { imagemini: false }
  ]
};