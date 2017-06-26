const path = require('path');
const VueWebpack = require('easywebpack-vue');
const merge = VueWebpack.merge;
const webpackConfig = require('../../config/config.webpack');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(config, webpackConfig));
    this.setEntry('vendor', ['vue']);
    this.setAlias('asset', path.join(this.config.baseDir, 'app/web/asset'));
    this.setAlias('app', path.join(this.config.baseDir, 'app/web/framework/vue/app'));
    this.setAlias('component', path.join(this.config.baseDir, 'app/web/component'));
    this.setAlias('framework', path.join(this.config.baseDir, 'app/web/framework'));
    this.setAlias('store', path.join(this.config.baseDir, 'app/web/store'));
  }
};
module.exports = WebpackBaseBuilder;