/**
 * a hack solution for postcss build error in webpack2
 * see: https://github.com/akveo/ng2-admin/issues/604#issuecomment-271974780
 */

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [ 'last 3 versions', 'Firefox ESR', '> 10%', 'ie >= 8' ]
    })
  ]
};
