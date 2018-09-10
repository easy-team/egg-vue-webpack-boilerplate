'use strict';
module.exports = app => {
  return class CategoryController extends app.Controller {
    async index(ctx) {
      await ctx.render('category/category.js', { message: 'Egg Vue Server Side Render: Category' });
    }
  };
};