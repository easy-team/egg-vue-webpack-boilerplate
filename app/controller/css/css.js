module.exports = app => {

  return class CssController extends app.Controller {

    async less() {
      const { ctx } = this;
      await ctx.render('less/less.js', { message: 'vue server side render, support less' });
    }

    async sass() {
      const { ctx } = this;
      await ctx.render('sass/sass.js', { message: 'vue server side render, support sass' });
    }

    async module() {
      const { ctx } = this;
      await ctx.render('css/module/module.js', { message: 'vue server side render, support css module' });
    }
  };
};