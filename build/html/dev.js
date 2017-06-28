const WebpackHtmlBaseBuilder = require('./base');
class ClientDevBuilder extends WebpackHtmlBaseBuilder {
  constructor(config) {
    super(config);
    this.setDevTool(false);
    this.setCssExtract(false);
  }
}
module.exports = new ClientDevBuilder().create();
