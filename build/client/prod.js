const ClientBaseBuilder = require('./base');
class ClientProdBuilder extends ClientBaseBuilder {
  constructor() {
    super();
    this.setCssExtract(true);
  }
}

module.exports = new ClientProdBuilder().create();
