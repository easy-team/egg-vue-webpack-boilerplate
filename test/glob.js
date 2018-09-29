const glob = require('glob');
const str = 'app/web/page/**!(component|components|view|views)/*.vue';
const result = str.match(/!\((.*)\)/);
if (result && result.length) {
  const matchIgnore = result[0];
  const matchIgnoreKeys = result[1];
  const matchStr = str.replace(matchIgnore, '');
  const ignore = matchIgnoreKeys.split('|').map(key => {
    if (/\./.test(key)) {
      return `**/${key}/**`;
    }
    return `**/${key}/**`;
  });
  const files = glob.sync(matchStr, { ignore });
  console.log(files);
} else {
  const files = glob.sync(str);
  console.log(files);
}
