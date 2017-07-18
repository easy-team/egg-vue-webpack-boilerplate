'use strict';
const WebpackServerBaseBuilder = require('./base');
class ServerProdBuilder extends WebpackServerBaseBuilder {
  constructor(config) {
    super(config);
    this.setMiniJs({
      globalDefs: {
        isBrowser: false,
        PROD: true
      }
    });
  }
}

module.exports = new ServerProdBuilder().create();