const path = require('path');

module.exports = app => {
  const exports = {};

  exports.view = {
    cache: false,
    defaultViewEngine: 'vue',
    mapping: {
      '.js': 'vue',
    },
  };

  exports.vue = {
    // useTemplate: false
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
