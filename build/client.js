const EggWebpackVue = require('egg-webpack-vue');
const webpackConfig = require('../config/webpackConfig');
const baseConfig = require('./config');
class ClientBuilder extends EggWebpackVue.WebpackClientBuilder {
  constructor(config, options) {
    super(config, options);
    this.setOption(baseConfig.getOption(config));
    if (!this.prod) {
      this.setOption({
        output: {
          publicPath: EggWebpackVue.EasyWebpack.Utils.getDevPublicPath(config, 2)
        },
        devtool: 'eval-source-map',
        performance: {
          hints: false
        }
      });
    }
  }
}

module.exports = new ClientBuilder(webpackConfig).create();
