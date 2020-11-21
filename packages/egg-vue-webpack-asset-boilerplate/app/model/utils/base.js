'use strict';
const Pagination = require('./pagination');
module.exports = class Model {
  constructor() {
    this.pagination = new Pagination();
  }
};