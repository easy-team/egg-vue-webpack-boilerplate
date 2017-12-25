module.exports = app => {

  return class DynamicController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('dynamic/dynamic.js', { message: 'vue server side render for dynamic component' });
    }

  };
};