'use strict';
module.exports = class Query {
  constructor() {
    this.where = {};
    this.like = {};
    this.orderByField = 'createTime';
    this.orderBy = 'desc';
    this.title = undefined;
    this.categoryId = undefined;
    this.status = undefined;
    this.tag = undefined;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.where = {};
    this.like = {};
  }
};