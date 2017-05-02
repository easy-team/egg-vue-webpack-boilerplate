const path = require('path');
const fs = require('fs');
const webpackConfig = require('../../config/webpackConfig');
const BaseBuilder = require('./base');
const StringReplacePlugin = require('string-replace-webpack-plugin');
class ServerBuilder extends BaseBuilder {
  constructor(config) {
    super(config, { isServer: true });
  }
  init() {
    switch (this.env) {
      case BaseBuilder.DEV:
        break;
      case BaseBuilder.TEST:
        break;
      case BaseBuilder.PROD:
        break;
      default:
        break;
    }
    const baseDir = this.config.baseDir;
    this.setLoader({
      test: /layout\/standard\/index\.js$/,
      loader: StringReplacePlugin.replace({
        replacements: [
          {
            pattern: /["|'](.*\.html)\?inline["|']/gi,
            replacement(match, p1, offset, string) {
              const filePath = path.join(baseDir, p1);
              const content = fs.readFileSync(filePath, 'utf8').replace(/'/g, '"');
              return `\`${content}\``;
            }
          }
        ]
      })
    });
    this.setPlugin(new StringReplacePlugin());
  }
}

module.exports = new ServerBuilder(webpackConfig).create();
