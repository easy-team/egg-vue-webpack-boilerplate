module.exports = () => {
  return async function platformMiddleware(ctx, next) {
    ctx.locals.locale = ctx.query.locale || 'cn';
    await next();
  };
};