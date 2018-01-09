'use strict';
const path = require('path');
const resolve = require('resolve');
const baseDir = process.cwd() + '/app/view';
const res = resolve.sync('test', { basedir: baseDir });