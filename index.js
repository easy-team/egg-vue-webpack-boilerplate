
process.env.VUE_ENV = 'server';
require('egg').startCluster({
  baseDir: __dirname,
  workers: process.env.WORKERS,
  port: process.env.PORT
});
