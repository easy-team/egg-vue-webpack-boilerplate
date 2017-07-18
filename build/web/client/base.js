'use strict';
const path = require('path');
const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../../base');
const WebpackWebBaseBuilder = require('../base');
class WebpackWebClientBaseBuilder extends WebpackWebBaseBuilder(WebpackBaseBuilder(VueWebpack.WebpackClientBuilder)) {
  constructor(config) {
    super(config);
    this.setDefine({ isBrowser: true });
    this.addEntry('vendor', ['vue', 'axios']);
    this.addPack('pack/inline', 'app/web/framework/inject/pack-inline.js');
  }
}
module.exports = WebpackWebClientBaseBuilder;