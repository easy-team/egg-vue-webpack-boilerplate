const EggWebpackVue = require('egg-webpack-vue');
const WebpackBaseBuilder = require('../base');
class ServerDevBuilder extends WebpackBaseBuilder(EggWebpackVue.WebpackServerBuilder) {
  constructor(config) {
    super(config);
    this.setEggWebpackPublicPath();
    this.setStatToJson(true);
  }
}

module.exports = new ServerDevBuilder().create();
