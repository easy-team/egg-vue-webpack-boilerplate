'use strict';
process.env.BUILD_SERVER = true;
const BaseBuilder = require('./base');
class ServerBuilder extends BaseBuilder {
  constructor(config) {
    super(config);
    this.useExtract(false);
    switch (this.env) {
      case BaseBuilder.DEV:
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

module.exports = ServerBuilder;