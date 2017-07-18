'use strict';
const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../../base');
const WebpackWebBaseBuilder = require('../base');
class WebpackWebServerBaseBuilder extends WebpackWebBaseBuilder(WebpackBaseBuilder(VueWebpack.WebpackServerBuilder)) {
  constructor(config) {
    super(config);
    this.setPrefix('');
    this.setBuildPath('app/view');
    this.setPublicPath('client', false);
    this.setMiniImage(false);
    this.setDefine({ isBrowser: false });
  }
}
module.exports = WebpackWebServerBaseBuilder;