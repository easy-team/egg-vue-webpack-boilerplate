const EggWebpackVue = require('egg-webpack-vue');
const base = require('../base');
class ClientBuilder extends EggWebpackVue.WebpackClientBuilder {
  constructor() {
    super(base.config);
    this.setOption(base.getOption(base.config));
  }
}

module.exports = ClientBuilder;
