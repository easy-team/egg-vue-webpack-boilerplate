const webpackConfig = require('../../config/webpackConfig');
const BaseBuilder = require('./base');
class ClientBuilder extends BaseBuilder {
  init() {
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

module.exports = new ClientBuilder(webpackConfig).create();
