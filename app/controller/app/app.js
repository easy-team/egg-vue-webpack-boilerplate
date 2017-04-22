const Model = require('../../mocks/article/list');

exports.index = function* () {
  yield this.render('app/app.js', { url: this.url.replace(/\/app/, '') });
};

exports.list = function* (ctx) {
  const pageIndex = ctx.query.pageIndex;
  const pageSize = ctx.query.pageSize;
  ctx.body = Model.getPage(pageIndex, pageSize);
};

exports.detail = function* (ctx) {
  const id = ctx.query.id;
  ctx.body = Model.getDetail(id);
};