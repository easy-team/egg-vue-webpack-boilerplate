'use strict';
module.exports = () => {
  return async function (ctx, next) {
    ctx.locals = { origin : ctx.origin };
    await next();
  }
};
