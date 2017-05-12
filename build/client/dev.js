const ClientBaseBuilder = require('./base');
class ClientDevBuilder extends ClientBaseBuilder {
  constructor() {
    super();
    this.setEggWebpackPublicPath();
    this.setDevTool('eval-source-map');
    this.setCssExtract(false);
    // this.ignoreCSS();
  }
}

module.exports = new ClientDevBuilder().create();
