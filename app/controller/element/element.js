const Model = require('../../mocks/article/list');

exports.element = function* (ctx) {
  yield ctx.render('element/element.js', Model.getPage(1, 10));
};

exports.elementjs = function* (ctx) {
  yield ctx.render('elementjs/elementjs.js', Model.getPage(1, 10));
};

exports.pager = function* (ctx) {
  const pageIndex = ctx.query.pageIndex;
  const pageSize = ctx.query.pageSize;
  ctx.body = Model.getPage(pageIndex, pageSize);
};
