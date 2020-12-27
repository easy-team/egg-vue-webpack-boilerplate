# egg-vue-webpack-boilerplate

基于 Egg + Vue + Webpack SSR 服务端渲染和 CSR 前端渲染工程骨架项目，包括前台系统(SSR MPA)和后台管理系统(SSR SPA)。

## 文档

https://www.yuque.com/easy-team/egg-vue

## 系统功能

### 前台博客系统 http://localhost:7001

**采用 Egg + Vue 服务端渲染**

![](https://github.com/easy-team/egg-vue-webpack-boilerplate/blob/master/docs/images/iblog.png?raw=true)

- 博客首页
- 文章列表
- 文章详情

### 后台管理系统 http://localhost:7001/admin

**采用 Egg + Vue + Vue-Router + Element 单页面服务端同构渲染**

![](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/master/docs/images/admin.png?raw=true)

- Dashboard
- Markdown
- 文章管理

### 骨架模板

- [egg-vue-webpack-boilerplate](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/master/packages/egg-vue-webpack-boilerplate) Egg + Vue 多种特性功能模板。
- [egg-vue-webpack-mpa-boilerplate](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/master/packages/egg-vue-webpack-mpa-boilerplate)  Egg + Vue 多页渲染模板。
- [egg-vue-webpack-spa-boilerplate](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/master/packages/egg-vue-webpack-spa-boilerplate) Egg + Vue + Vue-Router + Vuex 单页面服务端渲染模板。
- [egg-vue-webpack-asset-boilerplate](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/master/packages/egg-vue-webpack-asset-boilerplate) Egg + Vue 前端 Asset 渲染方案。
- [egg-vue-webpack-html-boilerplate](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/master/packages/egg-vue-webpack-html-boilerplate) Egg + Vue 静态 HTML 渲染方案。
- [egg-vue-typescript-boilerplate](https://github.com/easy-team/egg-vue-typescript-boilerplate) Egg + Vue + TypeScript 项目。
- [ves-admin](https://github.com/easy-team/ves-admin) Egg + Vue 上层框架解决方案。

以上项目，你可以通过 [easywebpack-cli](https://github.com/easy-team/easywebpack-cli) 初始化。

## 特性

- 支持服务端渲染SSR(Server Side Render), 前端渲染CSR(Client Side Render) 方式

- 支持 Node 和 前端代码修改, Webpack 自动编译和热更新, `npm run dev` 一键启动应用

- 基于 vue + axios 多页面服务端渲染, 客户端渲染同构实现, 支持 asyncData 渲染

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 支持 js/css/image 资源依赖, 内置支持 CDN 特性, 支持 css/sass/less 样式编写

- 支持根据 .vue 文件自动创建 Webpack Entry 入口文件

- 开始支持多进程和缓存编译， 支持 Webpack dll 自动化构建, 与多进程编译结合，构建速度减少 2/3

- 支持 Vue 组件 import 异步加载, 具体实例请看[app/web/page/dynamic](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/awesome/app/web/page/dynamic)

- 支持服务端渲染(SSR)失败时，自动降级为前端渲染(CSR)模式

- 提供 国际化 i18n 多语言支持方案

## 文档

- https://easyjs.cn/egg-vue
- https://easyjs.cn/easywebpack
- https://www.yuque.com/easy-team/egg-vue
- https://zhuanlan.zhihu.com/easywebpack

## 插件

- [easywebpack](https://github.com/easy-team/easywebpack) ^5.0.0
- [easywebpack-vue](https://github.com/easy-team/easywebpack) ^5.0.0
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^5.0.0
- [egg-view-vue-ssr](https://github.com/easy-team/egg-view-vue-ssr) ^3.0.0
- [egg-webpack-vue](https://github.com/easy-team/egg-webpack-vue) ^3.0.0

## 运行

```bash
npm run boot
npm run dev
```

或

```bash
cd packages/egg-react-webpack-boilerplate
npm install
npm run dev
```

## 交流

> 功能性需求或者Bug问题, 欢迎大家 PR 完善, 如果你需要了解更多信息，请加 QQ 群: 433207205 (备注：easyjs)


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://easyjs.cn"><img src="https://avatars2.githubusercontent.com/u/4983042?v=4" width="100px;" alt=""/><br /><sub><b>sky</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=hubcarl" title="Code">💻</a> <a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=hubcarl" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jasonjcpeng"><img src="https://avatars0.githubusercontent.com/u/13363216?v=4" width="100px;" alt=""/><br /><sub><b>jasonjcpeng</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=jasonjcpeng" title="Code">💻</a> <a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=jasonjcpeng" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/willworks"><img src="https://avatars2.githubusercontent.com/u/5542777?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Zhong</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=willworks" title="Code">💻</a> <a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=willworks" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/HiuYanChong"><img src="https://avatars0.githubusercontent.com/u/15319816?v=4" width="100px;" alt=""/><br /><sub><b>HiuYanChong</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=HiuYanChong" title="Code">💻</a> <a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=HiuYanChong" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.thonatos.com"><img src="https://avatars2.githubusercontent.com/u/958063?v=4" width="100px;" alt=""/><br /><sub><b>Suyi</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=thonatos" title="Code">💻</a> <a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=thonatos" title="Documentation">📖</a></td>
    <td align="center"><a href="https://blog.dada.li"><img src="https://avatars0.githubusercontent.com/u/3274850?v=4" width="100px;" alt=""/><br /><sub><b>Roy Li</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=geekdada" title="Code">💻</a> <a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=geekdada" title="Documentation">📖</a></td>
    <td align="center"><a href="https://wanghx.cn/"><img src="https://avatars0.githubusercontent.com/u/5856440?v=4" width="100px;" alt=""/><br /><sub><b>吖猩</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=whxaxes" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/beliefgp"><img src="https://avatars1.githubusercontent.com/u/12657964?v=4" width="100px;" alt=""/><br /><sub><b>Peng Gao</b></sub></a><br /><a href="https://github.com/hubcarl/egg-vue-webpack-boilerplate/commits?author=beliefgp" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT](LICENSE)
