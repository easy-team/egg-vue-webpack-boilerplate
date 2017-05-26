const ServerBaseBuilder = require('./base');
class ServerDevBuilder extends ServerBaseBuilder {
  constructor() {
    super();
    this.setEggWebpackPublicPath();
    this.setStatToJson(true);
  }
}

module.exports = new ServerDevBuilder().create();
