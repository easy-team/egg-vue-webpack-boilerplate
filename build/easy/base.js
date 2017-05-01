'use strict';
const path = require('path');
const WebpackVue = require('egg-webpack-vue');

class BaseBuilder extends WebpackVue.WebpackBuilder{
  constructor(config){
    super(config);
    this.setOption({
      entry: {
        vendor: [ 'vue' ]
      },
      resolve: {
        alias: {
          asset: path.join(config.baseDir, 'app/web/asset'),
          app: path.join(config.baseDir, 'app/web/framework/vue/app'),
          component: path.join(config.baseDir, 'app/web/component'),
          framework: path.join(config.baseDir, 'app/web/framework'),
          store: path.join(config.baseDir, 'app/web/store')
        }
      },
      externals: {},
      plugins: []
    });
  }
}

module.exports = BaseBuilder;