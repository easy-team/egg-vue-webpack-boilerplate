'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  nodeExternals: {
    whitelist: [ moduleName => {
      return /iview/.test(moduleName);
    }]
  },
  module: {
    rules: [
      {
        babel: {
          include: [resolve('app/web'), resolve('node_modules/iview')],
          exclude: []
        },
      },
      {
        vue: {
          include: [resolve('app/web'), resolve('node_modules/iview')],
          exclude: [],
        }
      }
    ]
  },
  plugins: {
    imagemini: false
  }
};