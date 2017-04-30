'use strict';
process.env.BUILD_CLIENT = true;
const webpack = require('webpack');
const WebpackTool = require('../webpack-tool');
const WebpackBuilder = require('../lib/builder');

module.exports = app => {
  const config = app.config.webpackvue;
  const Loader = WebpackTool.Loader(config);
  const builder = new WebpackBuilder(config, {
    devtool: config.build.sourceMap ? 'source-map' : false,
    output: {
      filename: Loader.assetsPath('js/[name].[chunkhash:7].js'),
      chunkFilename: Loader.assetsPath('js/[id].[chunkhash:7].js')
    },
    performance: {
      hints: false
    }
  });
  return builder.create();
};
