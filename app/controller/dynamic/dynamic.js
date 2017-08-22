exports.index = function* () {
  yield this.render('dynamic/dynamic.js', { message: 'vue server side render for dynamic component' });
};
