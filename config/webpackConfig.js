const path = require('path');
const baseDir = path.join(__dirname, '..');
module.exports = {
  baseDir,
  build: { // build 配置非必需, 当需要自定义webpack编译路径时, 请配置path和publicPath
    manifest: path.join(baseDir, 'public/config/manifest.json'),
    path: path.join(baseDir, 'public/res'),
    publicPath: '/public/res/'
  }
};