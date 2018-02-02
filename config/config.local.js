const path = require('path');
const ip = require('ip');
module.exports = app => {
  const exports = {};

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: ['build'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs')
  };

  const localIP = ip.address();
  const domainWhiteList = [];
  [7001, 9000, 9001].forEach(port => {
    domainWhiteList.push(`http://localhost:${port}`);
    domainWhiteList.push(`http://127.0.0.1:${port}`);
    domainWhiteList.push(`http://${localIP}:${port}`);
  });

  exports.security = { domainWhiteList };

  return exports;
};
