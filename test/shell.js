const os = require('os');
const shell = require('shelljs');

function checkPortUsed(port) {
  let cmd = '';
  switch (os.platform()) {
    case 'win32':
      cmd = `netstat -ano | findstr ${port}`;
      break;
    case 'darwin':
      cmd = `netstat -anp tcp | grep ${port}`;
      break;
    case 'linux':
      cmd = `netstat -apn | grep  ${port}`;
      break;
    default:
      cmd = `netstat -apn | grep  ${port}`;
      break;
  }
  try {
    const result = shell.exec(cmd, { silent: true });
    return !!result.stdout;
  } catch (err) {
    return false;
  }
}