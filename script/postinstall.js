'use strict';
const path = require('path');
const fs = require('fs');
const source = path.join(process.cwd(), 'script/webpack4/webpack/lib/node/NodeMainTemplatePlugin.js');
const target = path.join(process.cwd(), 'node_modules/webpack/lib/node/NodeMainTemplatePlugin.js');
fs.createReadStream(source).pipe(fs.createWriteStream(target));