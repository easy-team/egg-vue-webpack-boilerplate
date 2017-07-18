'use strict';
const WebpackClientBaseBuilder = require('./base');
class ClientProdBuilder extends WebpackClientBaseBuilder {
  constructor(config) {
    super(config);
    this.setMiniJs({ globalDefs: { isBrowser: true, PROD: true } });
  }
}
module.exports = new ClientProdBuilder().create();