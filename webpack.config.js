'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page',
      { 'app/app': 'app/web/page/app/app.js?loader=false' },
      { 'elementjs/elementjs': 'app/web/page/elementjs/elementjs.js?loader=false' }
    ],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/html', 'app/web/page/elementjs'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  dll: ['vue/dist/vue.common.js', 'axios', 'vue-router', 'vuex', 'vuex-router-sync', 'element-ui'],
  loaders: {},
  plugins: {},
  done() {

  }
};