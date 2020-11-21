'use strict';

const path = require('path');
const fs = require('fs');
const runscript = require('runscript');

exports.generatorPackage = async (source, target, pkgInfo) => {
  const pkg = fs.readFileSync(source);
  const pkgJSON = JSON.parse(pkg);
  pkgJSON.name = pkgInfo.name;
  fs.writeFileSync(target, JSON.stringify(pkgJSON, null, 2));
};

exports.mkdir = async (file) => {
  const dir = path.dirname(file);
  await runscript(`mkdir -p ${dir}`)
};


exports.rm = async  (file) => {
  if (fs.existsSync(file)) {
    const flag = fs.statSync(file).isDirectory() ? 'r' : '';
    await runscript(`rm -${flag}f ${file}`);
  }
};

exports.copyFile = async (source, target) => {
  const flag = fs.statSync(source).isDirectory() ? '-R' : '';
  const cmd = `cp ${flag} ${source} ${target}`;
  await exports.mkdir(target);
  await runscript(cmd);
};

exports.create = async (files, options) => {
  const { baseDir =process.cwd(), sourceName, targetName } = options;
  const sourceRoot = path.resolve(baseDir, 'packages', sourceName);
  const targetRoot = path.resolve(baseDir, 'packages', targetName);
  for(const file of files) {
    const sourceFile = path.resolve(sourceRoot, file);
    const targetFile = path.resolve(targetRoot, file);
    await exports.rm(targetFile);
    await exports.copyFile(sourceFile, targetFile);
  }
  const sourcePkgFile = path.resolve(sourceRoot, 'package.json');
  const targetPkgFile = path.resolve(targetRoot, 'package.json');
  await exports.generatorPackage(sourcePkgFile, targetPkgFile, { name: targetName });
};


