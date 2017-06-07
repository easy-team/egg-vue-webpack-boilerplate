const EggWebpackVue = require('egg-webpack-vue');
const WebpackBaseBuilder = require('../base');
class ClientDevBuilder extends WebpackBaseBuilder(EggWebpackVue.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setEggWebpackPublicPath();
    this.setDevTool(false);
    this.setCssExtract(false);
    this.setStatToJson(true);
  }
}
// console.log(new ClientDevBuilder().create());
module.exports = new ClientDevBuilder().create();
