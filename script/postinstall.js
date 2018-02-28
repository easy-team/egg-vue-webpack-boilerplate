'use strict';
const path = require('path');
const fs = require('fs');
const source = path.join(process.cwd(), 'script/webpack4/webpack-hot-middleware/middleware.js');
const target = path.join(process.cwd(), 'node_modules/webpack-hot-middleware/middleware.js');
fs.createReadStream(source).pipe(fs.createWriteStream(target));