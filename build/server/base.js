const path = require('path');
const fs = require('fs');
const EggWebpackVue = require('egg-webpack-vue');
const base = require('../base');
class ServerBuilder extends EggWebpackVue.WebpackServerBuilder {
  constructor() {
    super(base.config);
    this.setOption(base.getOption(base.config));
  }
}

module.exports = ServerBuilder;
