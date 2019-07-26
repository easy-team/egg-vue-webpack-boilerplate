'use strict';

module.exports = {
  plugins: [
    require('autoprefixer')({ overrideBrowserslist: ['iOS >= 7', 'Android >= 4.0'] })
  ]
};