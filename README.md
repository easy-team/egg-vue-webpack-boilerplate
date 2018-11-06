# egg-vue-element-admin-boilerplate

基于 Egg + Vue + Webpack ＋ Element 单页面管理系统骨架

- Egg + Vue + Vuex + Vue-Router + Webpack
- Egg 只提供数据服务，页面由 Vue 前端渲染
- Auto Building, Hot Reload, Code Splitting, High Speed, Performance Optimization
- 统一 fetchApi 请求，内置国际化支持


![截图](https://github.com/easy-team/egg-vue-webpack-boilerplate/blob/element-admin/docs/egg-element-admin.png?raw=true)

## 使用

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001


### 发布模式

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```

详细打包部署请见： http://hubcarl.github.io/easywebpack/vue/dev/

## 文档

- https://www.yuque.com/easy-team/egg-vue
- https://zhuanlan.zhihu.com/easywebpack

## 插件

- [easywebpack](https://github.com/easy-team/easywebpack) ^4.x.x
- [easywebpack-vue](https://github.com/easy-team/easywebpack) ^4.x.x
- [egg-view-vue-ssr](https://github.com/easy-team/egg-view-vue-ssr) ^3.x.x
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^4.x.x
- [egg-webpack-vue](https://github.com/easy-team/egg-webpack-vue) ^2.x.x

## 命令行

可以通过 [easywebpack-cli](https://github.com/easy-team/easywebpack-cli) 初始化本项目

## License

[MIT](LICENSE)
