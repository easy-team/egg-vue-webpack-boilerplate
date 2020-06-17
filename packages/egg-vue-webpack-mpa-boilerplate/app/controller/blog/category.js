'use strict';
module.exports = app => {
  return class CategoryController extends app.Controller {
    async index(ctx) {
      await ctx.render('blog/category.js', { message: 'Egg Vue Server Side Render: Category' });
    }
  };
};