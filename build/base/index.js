const path = require('path');
const EggWebpackVue = require('egg-webpack-vue');
const merge = EggWebpackVue.merge;
const webpackConfig = require('../../config/webpackConfig');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setOption({
      entry: {
        vendor: ['vue']
      }
    });
    this.setAlias('asset', path.join(this.config.baseDir, 'app/web/asset'));
    this.setAlias('app', path.join(this.config.baseDir, 'app/web/framework/vue/app'));
    this.setAlias('component', path.join(this.config.baseDir, 'app/web/component'));
    this.setAlias('framework', path.join(this.config.baseDir, 'app/web/framework'));
    this.setAlias('store', path.join(this.config.baseDir, 'app/web/store'));
  }
};
module.exports = WebpackBaseBuilder;