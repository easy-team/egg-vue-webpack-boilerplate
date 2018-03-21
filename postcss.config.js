'use strict';

module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: ['iOS >= 7', 'Android >= 4.0'] })
  ]
};