const path = require('path');
const baseDir = path.resolve(__dirname, '../');

module.exports = {
  baseDir,
  build: {
    port: 8090,
    path: 'public',
    publicPath: '/public/',
    prefix: 'static',
    entry: [path.join(baseDir, 'app/web/page')],
    commonsChunk: ['vendor']
  },
  webpack: {
    styleLoader: 'vue-style-loader',
    extractCss: true,
    loaderOption: {
      sass: {
        includePaths: [path.join(baseDir, 'app/web/asset/style')]
      }
    },
    pluginOption: {}
  }
};
