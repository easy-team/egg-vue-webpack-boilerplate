'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
const webpack = EasyWebpack.webpack;
module.exports = {
  framework: 'dll',
  entry: {
    include:{
      vendor: ['vue', 'axios', 'element-ui']
    }
  },
  options:{
    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].dll.js',
      library: '[name]_[hash]'
    }
  },
  plugins:{
    dll2:{
      name: new webpack.DllPlugin({
        path: path.join(__dirname, 'public/dll.json'),
        name: '[name]_[hash]'
      })
    }
  }
};