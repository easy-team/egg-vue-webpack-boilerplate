const EggWebpackVue = require('egg-webpack-vue');
const WebpackBaseBuilder = require('../base');
class ServerProdBuilder extends WebpackBaseBuilder(EggWebpackVue.WebpackServerBuilder) {
}

module.exports = new ServerProdBuilder().create();