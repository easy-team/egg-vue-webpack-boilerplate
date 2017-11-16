# 版本发布


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