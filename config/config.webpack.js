const path = require('path');
const baseDir = path.join(__dirname, '..');
module.exports = {
  baseDir,
  build: {
    template: path.join(baseDir, 'app/web/view/layout.html')
  }
};