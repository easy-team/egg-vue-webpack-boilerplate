
module.exports = app => {

  return class RouterController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('router/router.js', { message: 'vue server side render!' });
    }

  };
};