const EggWebpackVue = require('egg-webpack-vue');
const base = require('../base');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

class ServerBuilder extends EggWebpackVue.WebpackServerBuilder {
  constructor() {
    super(base.config);
    this.setOption(base.getOption(base.config));
    this.addPlugin(VueSSRServerPlugin);
  }
}

module.exports = ServerBuilder;
