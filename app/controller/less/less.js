exports.index = function* () {
  yield this.render('less/less.js', { message: 'vue server side render, support less' });
};
