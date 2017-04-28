const path = require('path');
const fs = require('fs');

module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico')),
  };

  exports.view = {
    cache: false,
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    router: '/public', // 请求进来的前缀，避免和应用的 router 冲突，默认是 `/public`
    // maxAge: 3600 * 24 * 180, // maxAge 缓存，默认 1 年
    dir: path.join(app.baseDir, 'public') // 静态文件目录，默认是 `${baseDir}/app/pulbic`
  };

  exports.keys = '123456';

  exports.middleware = [
    'access',
  ];

  return exports;
};
