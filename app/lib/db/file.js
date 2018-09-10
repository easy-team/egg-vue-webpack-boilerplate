'use strict';
const lowdb = require('lowdb');
const lodashid = require('lodash-id');
const FileSync = require('lowdb/adapters/FileSync');
const Base = require('./base');
module.exports = class FileDB extends Base {
  constructor(name) {
    super(name);
    const file = new FileSync(this.name);
    this.instance = lowdb(file);
    this.instance._.mixin(lodashid);
    this.create();
  }
  create() {
    this.instance.defaults({
      article: [],
      user: {}
    }).write();
  }
  get(collectionName) {
    return this.instance.get(collectionName);
  }
  add(collectionName, json) {
    return this.get(collectionName)
      .push(json)
      .write();
  }
  update(collectionName, where, json) {
    return this.get(collectionName).find(where).assign(json).write();
  }
  delete(collectionName, field) {
    return this.get(collectionName).remove(field).write();
  }
  getPager(collectionName, json) {
    const {
      where,
      like,
      pageIndex,
      pageSize,
      orderByField,
      orderBy
    } = json;
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;
    const result = this.get(collectionName)
      .filter(where)
      .filter(item => {
        return Object.keys(like).reduce((isLike, key) => {
          return isLike && item[key] && item[key].indexOf(like[key]) > -1;
        }, true);
      })
      .orderBy(orderByField, orderBy);
    const total = result.size().value();
    const list = result.slice(start, end).value();
    return {
      total,
      list
    };
  }
};