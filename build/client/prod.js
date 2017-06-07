const EggWebpackVue = require('egg-webpack-vue');
const WebpackBaseBuilder = require('../base');
class ClientProdBuilder extends WebpackBaseBuilder(EggWebpackVue.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setCssExtract(true);
  }
}

module.exports = new ClientProdBuilder().create();
