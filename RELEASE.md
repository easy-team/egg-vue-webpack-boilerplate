# 版本发布

## 3.5.0/3.6.0

-  easywebpack-cli ^3.5.0
-  easywebpack-vue ^3.5.0
-  egg-webpack ^3.2.4
-  easywebpack ^3.5.0
-  webpack-manifest-resource-plugin ^2.0.2 

## 变更说明

- 支持 webpack dll 配置和自动化构建
- 简化 commonsChunk lib 配置， 无需在 onClient 调用 addEntry 设置
- plugins 和 loaders 增加数组的配置的兼容，也就是支持原生配置
- 去掉options节点配置，改为 webpack.config.js 支持原生 Webpack 配置
- 支持多进程 Webpack 编译, 结合dll功能编译速度显著提示，初步测试编译时间减少2/3
- manifest和buildfie合并为新的manifest， 无需 manifest 和 manifestDeps 兼容配置， 同时去掉 buildfie 配置， 
- 默认禁用 npm start 启动检查 webpack loader 和 plugin 是否安装的功能， 提高编译速度。
- stylus 和 less loader 默认有开启改为禁用， 减少不必要的安装
- 新增内置插件 webpack-bundle-analyzer 和 stats-webpack-plugin
- 解决 NODE_ENV=production 导致动态安装 npm 依赖失败
- 修复 easywebpack 配置合并覆盖问题


## 3.2.0

### 依赖

-  vue ^2.4.x
-  vuex ^2.4.x, ^3.x.x
-  egg-view-vue-ssr ^3.0.0
-  egg-webpack-vue ^2.0.0
-  webpack-manifest-resource-plugin ^1.0.0

### 变更说明

- vue/vue-server-renderer 不再内置插件 egg-view-vue-ssr 里面, 由项目自己根据需要安装指定版本

- 升级 egg-view-vue-ssr 为 ^2.0.0  不再依赖 egg-view-vue, 解决了 Egg 多引擎问题

- manifest 资源依赖不在运行期处理(plugins.manifest, 改为构建期间处理(plugins.manifestDeps), 同时不再需要生成 buildConfig.json 文件

- webpack.config.js 配置变更, 目前采用兼容方式, 待 Webpack 发布 4.0 时, webpack-manifest-plugin 替换为 webpack-manifest-resource-plugin 

```json
{
   plugins: {
     buildfile: true,
     manifest: true
   }
}
```


```json
{
   plugins: {
     buildfile: false,
     manifest: false,   // old manifest feature
     manifestDeps: true // new manifest feature, not need buildfile
   }
}
```


- 支持服务端渲染失败, 客户端重新渲染

- 增加 <!DOCTYPE html> 组装


## 3.1.0

### 依赖

-  react ^15
-  react-dom ^15
-  egg-view-vue ^1.0.0
-  egg-view-vue-ssr ^1.1.0
-  egg-webpack-vue ^1.0.0
-  webpack-manifest-plugin ^1.0.0