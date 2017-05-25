const value = 'static/js/\\element\\element.js';
const key = '\\element\\element.js';
const nvalue = value.replace(/\\/g, '/').replace(/\/\//g, '/');
const nkey = key.replace(/^\\/g, '').replace(/\\/g, '/');
console.log(nkey, nvalue);

const manifest = {
  "\\about\\about.js": "static/js/\\about\\about.js",
  "\\app\\app.js": "static/js/\\app\\app.js",
  "\\element\\element.js": "static/js/\\element\\element.js",
  "\\front\\front.js": "static/js/\\front\\front.js",
  "\\index\\index.js": "static/js/\\index\\index.js",
  "\\router\\router.js": "static/js/\\router\\router.js",
  "\\test\\test.js": "static/js/\\test\\test.js",
  "static\\img\\loading.gif": "static/img/loading.gif",
  "static\\img\\logo.png": "static/img/logo.png",
  "vendor.js": "static/js/vendor.js"
};


const normalizeManifest = {};
Object.keys(manifest).forEach(key => {
   const normalizeKey = key.replace(/^\\/g, '').replace(/\\/g, '/');
   const normalizeValue = manifest[key].replace(/\\/g, '/').replace(/\/\//g, '/');
   normalizeManifest[normalizeKey] = normalizeValue;
});
console.log(normalizeManifest);