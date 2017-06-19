const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../base');
class ClientDevBuilder extends WebpackBaseBuilder(VueWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setEggWebpackPublicPath();
    this.setDevTool(false);
    this.setCssExtract(false);
    this.setManifest(true);
    this.setBuildConfig(true);
  }
}
// console.log(new ClientDevBuilder().create());
module.exports = new ClientDevBuilder().create();
