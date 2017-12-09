'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/[a-z]+/component'],
  },
  alias: {
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  dll: {
    name: 'vendor',
    lib: ['vue/dist/vue.common.js', 'axios', 'vue-router', 'vuex', 'vuex-router-sync', 'element-ui'],
  },
  loaders: {
  },
  plugins: {
  },
  done() {

  }
};