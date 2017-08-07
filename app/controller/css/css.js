exports.less = function* () {
  yield this.render('less/less.js', { message: 'vue server side render, support less' });
};

exports.sass = function* () {
  yield this.render('sass/sass.js', { message: 'vue server side render, support sass' });
};
