const Model = require('../../mocks/article/list');

module.exports = app => {

  return class ElementController extends app.Controller {

    async element() {
      const { ctx } = this;
      await ctx.render('element/element.js', Model.getPage(1, 10));
    }

    async elementjs() {
      const { ctx } = this;
      await ctx.render('elementjs/elementjs.js', Model.getPage(1, 10));
    }

    async pager() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }

  };
};