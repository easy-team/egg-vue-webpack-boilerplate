const Model = require('../../mocks/article/list');

module.exports = app => {

  return class ES6Controller extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.renderClient('index/index.js', Model.getPage(1, 10));
    }

  };
};