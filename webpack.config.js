'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page', { 'app/app': 'app/web/page/app/app.js?loader=false' }],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/test', 'app/web/page/html', 'app/web/page/app'],
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
  packs: {
    'pack/inline': ['app/web/framework/inject/pack-inline.js']
  },
  loaders: {
    eslint: false,
    css: {
      exclude: [] // 开启node_modules 目录, 解决mint-ui css in module
    },
    less: false, // 没有使用, 禁用可以减少npm install安装时间
    stylus: false // 没有使用, 禁用可以减少npm install安装时间
  },
  plugins: {
    provide: false,
    define: {
      args() { // 支持函数, 这里仅做演示测试,isNode无实际作用
        return {
          isNode: this.ssr
        };
      }
    },
    commonsChunk: {
      args: {
        minChunks: 5
      }
    },
    uglifyJs: {
      args: {
        compress: {
          warnings: false
        }
      }
    }
  }
};