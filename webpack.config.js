'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: [
      'app/web/page',
      { 'app/app': 'app/web/page/app/app.js?loader=false' },
      { 'elementjs/elementjs': 'app/web/page/elementjs/elementjs.js?loader=false' }
    ],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/elementjs'],
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
  install: {
    check: false
  },
  loaders: {
    eslint: false,
    less: false, // 没有使用, 禁用可以减少npm install安装时间
    stylus: false // 没有使用, 禁用可以减少npm install安装时间
  },
  plugins: {
    dll: {
      vendor: ['vue', 'axios', 'element-ui']
    },
    imagemini: false,
    buildfile: false,
    manifest: false, // old manifest feature
    manifestDeps: true // new manifest feature, not need buildfile
  },
  done(){

  }
};