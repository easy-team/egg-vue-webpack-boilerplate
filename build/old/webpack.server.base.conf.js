const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = (projectRoot, config) => {
  const baseWebpackConfig = require('./webpack.base.conf')(projectRoot, config);
  const serverBaseWebpackConfig = merge(baseWebpackConfig, {
    module: {
      rules: [
        {
          test: /layout\/standard\/index\.js$/,
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: /["|'](.*\.html)\?inline["|']/gi,
                replacement(match, p1, offset, string) {
                  const filePath = path.join(projectRoot, p1);
                  const content = fs.readFileSync(filePath, 'utf8').replace(/'/g, '"');
                  return `\`${content}\``;
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new StringReplacePlugin()
    ]
  });
  return serverBaseWebpackConfig;
};
