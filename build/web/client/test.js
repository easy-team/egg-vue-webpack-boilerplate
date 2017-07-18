'use strict';
const WebpackClientBaseBuilder = require('./base');
class ClientDevBuilder extends WebpackClientBaseBuilder {
  constructor(config) {
    super(config);
    this.setDevTool(false);
    this.setDefine({ PROD: false });
    this.addEntry('vendor', ['vconsole']);
  }
}
module.exports = new ClientDevBuilder().create();
