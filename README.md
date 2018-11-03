# egg-vue-element-admin-boilerplate

基于 Egg + Vue + Webpack ＋ Element 单页面管理系统骨架

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

![npm start启动](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/docs/images/webpack-build.png)


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

## 功能

- Dashboard
- 文章管理
- Markdown添加文章 
- 权限管理

## 文档

- https://www.yuque.com/easy-team/egg-vue
- https://zhuanlan.zhihu.com/easywebpack

## 插件

- [easywebpack](https://github.com/easy-team/easywebpack) ^4.x.x
- [easywebpack-vue](https://github.com/easy-team/easywebpack) ^4.x.x
- [egg-view-vue-ssr](https://github.com/easy-team/egg-view-vue-ssr) ^3.x.x
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^4.x.x
- [egg-webpack-vue](https://github.com/easy-team/egg-webpack-vue) ^2.x.x

## License

[MIT](LICENSE)
