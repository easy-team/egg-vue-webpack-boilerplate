'use strict';
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    app: 'app/web/page/app/index.js'
  },
  plugins: [{
    copy: [{
      from: 'app/web/asset/css/bootstrap.min.css',
      to: 'asset/css/bootstrap.min.css'
    }]
  }]
};