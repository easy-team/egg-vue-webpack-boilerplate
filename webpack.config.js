'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  commonsChunk: ['vendor'],
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/html']
  },
  html: {
    include: 'app/web/page/html',
    template: 'app/web/view/layout.html',
    buildDir: 'html',
    options: {}
  },
  alias: {
    asset: 'app/web/asset',
    app: 'app/web/framework/vue/app.js',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  packs: {
    'pack/inline': ['app/web/framework/inject/pack-inline.js']
  },
  create() {
    if (this.config.type === 'client') {
      this.addEntry('vendor', ['vue', 'axios']);
    }
  }
};