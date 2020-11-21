'use strict';
module.exports = class Collection {
  constructor(db, name) {
    this.db = db;
    this.name = name;
  }
  get() {
    return this.db.get(this.name);
  }
  getByWhere(json) {
    return this.db.get(this.name).find(json);
  }
  add(json) {
    return this.db.add(this.name, json);
  }
  update(where, json) {
    return this.db.update(this.name, where, json);
  }
  delete(field) {
    return this.db.delete(this.name, field);
  }
  getPager(query) {
    return this.db.getPager(this.name, query);
  }
  getOrderAscByField(field) {
    return this.get().orderBy(field, 'asc').value();
  }
  getOrderDescByField(field) {
    return this.get().orderBy(field, 'desc').value();
  }
};