'use strict';
module.exports = class Query {
  constructor() {
    this.orderByField = 'createTime';
    this.orderBy = 'desc';
    this._pageIndex = 1;
    this._pageSize = 10;
    this.where = new Proxy({}, {
      set(target, key, value, proxy) {
        if (value === undefined) {
          return true;
        }
        return Reflect.set(target, key, value, proxy);
      }
    });

    this.like = new Proxy({}, {
      set(target, key, value, proxy) {
        if (value === undefined) {
          return true;
        }
        return Reflect.set(target, key, value, proxy);
      }
    });
  }

  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    if (value !== undefined) {
      this._pageIndex = value;
    }
  }

  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    if (value !== undefined) {
      this._pageSize = value;
    }
  }
};