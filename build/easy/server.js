const webpackConfig = require('../../config/webpackConfig');
const BaseBuilder = require('./base');
class ServerBuilder extends BaseBuilder {
  constructor(config) {
    super(config, { isServer: true });
  }
  init() {
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

module.exports = new ServerBuilder(webpackConfig).create();
