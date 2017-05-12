const ServerBaseBuilder = require('./base');
class ServerProdBuilder extends ServerBaseBuilder {
}

module.exports = new ServerProdBuilder().create();