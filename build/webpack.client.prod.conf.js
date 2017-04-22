
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = (projectRoot, config) => {
  const baseWebpackConfig = require('./webpack.base.conf')(projectRoot, config);
  const prodWebpackConfig = merge(baseWebpackConfig, {
    plugins: [
      new webpack.DefinePlugin({
        PROD: true
      })
    ]
  });
  return prodWebpackConfig;
};
