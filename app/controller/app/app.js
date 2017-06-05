const Model = require('../../mocks/article/list');
const serverBundle = require('../../view/vue-ssr-server-bundle.json');

exports.index = function* (ctx) {
  const url = ctx.url.replace(/\/app/, '') || '/';
  yield ctx.app.vue.renderCode(serverBundle, { state: { url } });
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
