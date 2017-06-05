const EggWebpackVue = require('egg-webpack-vue');
const base = require('../base');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

class ClientBuilder extends EggWebpackVue.WebpackClientBuilder {
  constructor() {
    super(base.config);
    this.setOption(base.getOption(base.config));
    this.addPlugin(VueSSRClientPlugin);
  }
}

module.exports = ClientBuilder;
