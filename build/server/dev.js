const ServerBaseBuilder = require('./base');
class ServerDevBuilder extends ServerBaseBuilder {
  constructor() {
    super();
    this.setEggWebpackPublicPath();
  }
}

module.exports = new ServerDevBuilder().create();
