'use strict';
const path = require('path');
const prefix = 'static/test';
const url = 'js/index.js';
console.log('--path.join--', path.join(prefix, url));
console.log('--path.posix.join--', path.posix.join(prefix, url));

// windows print

// --path.join-- static\test\js\index.js
// --path.posix.join-- static/test/js/index.js