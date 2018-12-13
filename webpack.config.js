'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
module.exports = {
  target: 'web',
  entry: {
    admin: 'app/web/page/admin/index.js'
  },
  plugins: {
    extract: true,
    imagemini: false
  }
};