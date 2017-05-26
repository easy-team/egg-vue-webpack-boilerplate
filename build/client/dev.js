const ClientBaseBuilder = require('./base');
class ClientDevBuilder extends ClientBaseBuilder {
  constructor() {
    super();
    this.setEggWebpackPublicPath();
    this.setDevTool(false);
    this.setCssExtract(false);
    this.setStatToJson(true);
  }
}

module.exports = new ClientDevBuilder().create();
