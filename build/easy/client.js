'use strict';
const BaseBuilder = require('./base');
class ClientBuilder extends BaseBuilder {
  constructor(config) {
    super(config);
    this.setOption({
      devtool: 'source-map',
      performance: {
        hints: false
      }
    });
    switch (this.env) {
      case BaseBuilder.DEV:
        this.useHash(false);
        break;
      case BaseBuilder.TEST:
        break;
      case BaseBuilder.PROD:
        break;
      default:
        break;
    }
  }
}

module.exports = ClientBuilder;