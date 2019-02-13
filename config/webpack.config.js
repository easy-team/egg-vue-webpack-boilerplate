'use strict';
const easywebpack = require('easywebpack-vue');
const webpackConfigList = easywebpack.getWebpackConfig({
    egg: true,
    entry:{
      app: 'app/web/page/index/index.vue'
    }
});

module.exports = webpackConfigList;