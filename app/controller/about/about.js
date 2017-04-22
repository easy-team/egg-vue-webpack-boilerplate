exports.index = function* () {
  yield this.render('about/about.js', { message: 'vue server side render!' });
};
