const StatsPlugin = require('stats-webpack-plugin');
const ClientBaseBuilder = require('./base');
class ClientDevBuilder extends ClientBaseBuilder {
  constructor() {
    super();
    this.setEggWebpackPublicPath();
    this.setDevTool(false);
    this.setCssExtract(false);
    // this.ignoreCSS();
    //this.setPlugin(new StatsPlugin('stats.json', {
    //  chunkModules: true,
    //  chunks: true,
    //  assets: true,
    //  modules: true,
    //  children: true,
    //  chunksSort: true,
    //  assetsSort: true
    //}));
  }
}

module.exports = new ClientDevBuilder().create();
