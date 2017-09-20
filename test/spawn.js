const spawn = require('cross-spawn');
const output = spawn.sync('ls', ['-lrt'], {
  stdio: ['ignore', 'pipe', 'inherit']
});

console.log(output.stdout.toString());