const path = require('path');
const fs = require('fs');
const EggWebpackVue = require('egg-webpack-vue');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const webpackConfig = require('../config/webpackConfig');
const baseConfig = require('./config');
class ServerBuilder extends EggWebpackVue.WebpackServerBuilder {
  constructor(config, options) {
    super(config, options);
    this.setOption(baseConfig.getOption(config));
    this.setLoader({
      test: /layout\/standard\/index\.js$/,
      loader: StringReplacePlugin.replace({
        replacements: [
          {
            pattern: /["|'](.*\.html)\?inline["|']/gi,
            replacement(match, p1, offset, string) {
              const filePath = path.join(config.baseDir, p1);
              const content = fs.readFileSync(filePath, 'utf8').replace(/'/g, '"').replace(/[\r\n]/g, '');
              return "'" + content + "'";
            }
          }
        ]
      })
    }, true);
    this.setPlugin(new StringReplacePlugin(), true);
  }
}

module.exports = new ServerBuilder(webpackConfig).create();
