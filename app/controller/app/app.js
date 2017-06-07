const Model = require('../../mocks/article/list');
// const serverBundle = require('../../view/vue-ssr-server-bundle.json');

exports.index = function* (ctx) {
  const url = ctx.url.replace(/\/app/, '') || '/';
  // this.body = yield ctx.app.vue.renderBundle(serverBundle, { state: { url } });
  yield ctx.render('vue-ssr-server-bundle.json', { url });
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
