
exports.index = function* () {
  yield this.render('router/router.js', { message: 'vue server side render!' });
};
