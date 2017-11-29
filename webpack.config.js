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
    },
    html: {
      include: ['app/web/page/html', { 'element/front': 'app/web/page/html/element/front.js?loader=false' }],
      template: 'app/web/view/layout.html',
      buildDir: 'html',
      options: {}
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
  loaders: {
    eslint: false,
    less: false, // 没有使用, 禁用可以减少npm install安装时间
    stylus: false // 没有使用, 禁用可以减少npm install安装时间
  },
  plugins: {
    imagemini: false,
    buildfile: false,
    manifest: false, // old manifest feature
    manifestDeps: true // new manifest feature, not need buildfile
  },
  done(){

  }
};