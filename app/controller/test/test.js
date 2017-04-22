
exports.index = function* () {
  yield this.render('test/test.js', { message: 'vue server side render!' });
};
