const VueWebpack = require('easywebpack-vue');
const merge = VueWebpack.merge;
const webpackConfig = require('../../config/config.webpack');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setEntry('vendor', ['vue']);
    this.setAlias('asset', 'app/web/asset', true);
    this.setAlias('app', 'app/web/framework/vue/app', true);
    this.setAlias('component', 'app/web/component', true);
    this.setAlias('framework', 'app/web/framework', true);
    this.setAlias('store', 'app/web/store', true);
  }
};
module.exports = WebpackBaseBuilder;