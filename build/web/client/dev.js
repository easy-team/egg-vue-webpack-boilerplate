'use strict';
const path = require('path');
const WebpackClientBaseBuilder = require('./base');
class ClientDevBuilder extends WebpackClientBaseBuilder {
  constructor(config) {
    super(config);
    this.setProxy(true);
    this.setDefine({ PROD: false });
    this.addEntry('vendor', ['vconsole']);
  }
}
module.exports = new ClientDevBuilder().create();
