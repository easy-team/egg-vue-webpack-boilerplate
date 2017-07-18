'use strict';
const WebpackServerBaseBuilder = require('./base');
class ServerDevBuilder extends WebpackServerBaseBuilder {
  constructor(config) {
    super(config);
    this.setProxy(true);
    this.setDefine({ PROD: false });
  }
}
module.exports = new ServerDevBuilder().create();
