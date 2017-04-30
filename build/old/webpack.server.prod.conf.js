
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = (projectRoot, config) => {
  const baseWebpackConfig = require('./webpack.server.base.conf')(projectRoot, config);
  const serverWebpackConfig = merge(baseWebpackConfig, {
    plugins: [
      new webpack.DefinePlugin({
        PROD: true
      })
    ]
  });
  return serverWebpackConfig;
};
