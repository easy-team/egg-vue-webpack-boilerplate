'use strict';
const WebpackServerBaseBuilder = require('./base');
class ServerTestBuilder extends WebpackServerBaseBuilder {
  constructor(config) {
    super(config);
    this.setDefine({ PROD: false });
  }
}
module.exports = new ServerTestBuilder().create();
