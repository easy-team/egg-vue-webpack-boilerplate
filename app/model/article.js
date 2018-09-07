'use strict';

module.exports = class Model {
  constructor() {
    super();
    this.id = void 0;
    this.title = undefined;
    this.summary = undefined;
    this.tag = undefined;
    this.hits = 0;
    this.createTime = Date.now();
  }
};