const VueWebpack = require('easywebpack-vue');
const merge = VueWebpack.merge;
const WebpackBaseBuilder = require('../base');
class WebpackHtmlBaseBuilder extends WebpackBaseBuilder(VueWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(merge({ build: { entry: 'app/web/html' } }, config));
    this.setPrefix('html');
    this.setHtml(true);
  }
}
module.exports = WebpackHtmlBaseBuilder;