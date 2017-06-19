const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../base');
class ClientProdBuilder extends WebpackBaseBuilder(VueWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setCssExtract(true);
    this.setManifest(true);
    this.setBuildConfig(true);
  }
}

module.exports = new ClientProdBuilder().create();
