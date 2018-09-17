const glob = require('glob');
const files = glob.sync('app/web/page/**(!components?|views?)/*.vue');
console.log(files);