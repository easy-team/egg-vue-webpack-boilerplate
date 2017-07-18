'use strict';
const env = process.env.BUILD_ENV || 'dev';
module.exports = require(`./${env}`);