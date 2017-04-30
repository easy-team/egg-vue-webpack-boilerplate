
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = (projectRoot, config) => {
  const baseWebpackConfig = require('./webpack.base.conf')(projectRoot, config);
  const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    plugins: [
      new webpack.DefinePlugin({
        PROD: false
      })
    ]
  });
  return devWebpackConfig;
};
