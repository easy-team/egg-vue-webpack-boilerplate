
exports.index = function* () {
  yield this.render('test/test.js', { title: 'error test', message: 'vue server side render!' });
};
