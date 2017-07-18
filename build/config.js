'use strict';
if (!process.env.BUILD_ENV) {
  process.env.BUILD_ENV = 'dev';
  process.env.NODE_ENV = 'development';
}
const BUILD_ENV = process.env.BUILD_ENV;
const path = require('path');
const baseDir = path.join(__dirname, '..');

module.exports = {
  baseDir,
  env: BUILD_ENV,
  commonsChunk: ['vendor'],
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/test', 'app/web/page/html']
  },
  html: {
    template: 'app/web/view/layout.html',
    buildDir: 'html',
    include: ['app/web/page/html'],
    exclude: []
  },
  logger: {
    enable: false,
    all: false,
    keyword: false,
    config: true,
    option: false,
    loader: false,
    plugin: false
  }
};