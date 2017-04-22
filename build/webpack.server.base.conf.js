const merge = require('webpack-merge');

module.exports = (projectRoot, config) => {
  const baseWebpackConfig = require('./webpack.base.conf')(projectRoot, config);
  const serverBaseWebpackConfig = merge(baseWebpackConfig, {});
  return serverBaseWebpackConfig;
};
