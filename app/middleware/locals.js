module.exports = () => {
  return async function locale(ctx, next) {
    ctx.locals.locale = ctx.query.locale || 'cn';
    await next();
  };
};