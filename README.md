# egg-vue-webpack-boilerplate

> 功能性需求或者Bug问题, 欢迎大家 PR 完善, 如果你需要了解更多信息，请加QQ群: 433207205(备注：Node.js).


基于 Egg + Vue + Webpack SSR 服务端渲染工程骨架项目，包括前台系统(SSR MPA)和后台管理系统(SSR SPA)。 如果要深入了解，建议请先阅读 https://www.yuque.com/easy-team/egg-vue 专题。

## 系统功能

### 前台博客系统 http://localhost:7001

**采用 Egg + Vue 服务端渲染**

![](https://github.com/easy-team/egg-vue-webpack-boilerplate/blob/master/docs/images/iblog.png?raw=true)

- 博客首页
- 文章列表
- 文章详情

### 后台管理系统 http://localhost:7001/admin

**采用 Egg + Vue + Vue-Router + Element 单页面服务端同构渲染**

![](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/docs/images/admin.png?raw=true)

- Dashboard
- Markdown
- 文章管理

## 纯净版

因该项目包含了多种实现, 提供多种例子实现，为防干扰, 特提供了两个纯净版本分支用于实际项目开发, 请自行选用。

- Egg + Vue + Axios 多页面服务端渲染分支 [feature/green/multi](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/feature/green/multi)
- Egg + Vue + vue-router + vuex + axios 单页面服务端渲染分支 [feature/green/spa](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/feature/green/spa)
- Egg + Vue + vue-router + vuex + axios 前端渲染 asset 方案 [feature/green/asset](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/feature/green/asset)
- Egg + Vue + vue-router + vuex + axios 前端渲染一体化方案 [element-admin](https://github.com/easy-team/egg-vue-webpack-boilerplate/tree/element-admin)
- Egg + Vue + TypeScript 项目，请见项目 [egg-vue-typescript-boilerplate](https://github.com/easy-team/egg-vue-typescript-boilerplate) 和 [ves-admin](https://github.com/easy-team/ves-admin) 

以上项目，你可以通过 [easywebpack-cli](https://github.com/easy-team/easywebpack-cli) 初始化

## 版本

- Egg 版本： ^2.x.x
- Node 版本: ^8.x.x+
- Vue 版本: ^2.5.0
- Webpack 版本: ^4.x.x, 对应 `easywebpack-vue` 版本为 ^4.x.x; Webpack3 版本项目骨架请见 `webpack3` 分支, 对应 `easywebpack-react` 版本为 3.x.x

## 说明 

- 项目开发之前, 请阅读[Egg + Vue 解决方案](https://www.yuque.com/easy-team/egg-vue)
- 如果你需要了解 Egg+ Vue + Webpack 项目更多信息，请扫以下二维码加好友，请备注：Node.js。 骨架功能性需求或者 Bug 问题, 欢迎大家 PR 完善。

![hubcarl](https://avatars3.githubusercontent.com/u/4983042?v=4&u=0befb64a57a7911c630b7f97df5632385b08da2a&s=250)

## 文档

- https://www.yuque.com/easy-team/egg-vue
- https://zhuanlan.zhihu.com/easywebpack


## 1.特性

- 支持服务端渲染SSR(Server Side Render), 前端渲染CSR(Client Side Render) 方式

- 支持 Node 和 前端代码修改, Webpack 自动编译和热更新, `npm run dev` 一键启动应用

- 基于 vue + axios 多页面服务端渲染, 客户端渲染同构实现, 支持 asyncData 渲染

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 支持 js/css/image 资源依赖, 内置支持 CDN 特性, 支持 css/sass/less 样式编写

- 支持根据 .vue 文件自动创建 Webpack Entry 入口文件

- 开始支持多进程和缓存编译， 支持 Webpack dll 自动化构建, 与多进程编译结合，构建速度减少 2/3

- 支持 Vue 组件 import 异步加载, 具体实例请看[app/web/page/dynamic](app/web/page/dynamic)

- 支持服务端渲染(SSR)失败时，自动降级为前端渲染(CSR)模式

- 提供 国际化 i18n 多语言支持方案


## 2.依赖

- [easywebpack](https://github.com/easy-team/easywebpack) ^4.x.x
- [easywebpack-vue](https://github.com/easy-team/easywebpack) ^4.x.x
- [egg-view-vue-ssr](https://github.com/easy-team/egg-view-vue-ssr) ^3.x.x
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^4.x.x
- [egg-webpack-vue](https://github.com/easy-team/egg-webpack-vue) ^2.x.x


## 3. 使用

#### 3.1 安装cli(非必需)

```bash
npm install @easy-team/easywebpack-cli -g
```

`easywebpack-cli` 已内置 `devDependencies` 中, 无需安装。如果你需要在命令行使用 `easy` 命令, 可以单独全局安装。

#### 3.2 安装依赖

```bash
npm install
```


#### 3.3 本地开发启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

![npm start启动](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/docs/images/webpack-build.png)


#### 3.4 发布模式启动应用

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```


详细打包部署请见： http://hubcarl.github.io/easywebpack/vue/dev/

## 4. 配置说明(支持三种方式)

#### 4.1 方式一: `easywebpack-cli` 根据  `webpack.config.js` 自动创建Webpack Config 

```js
`config/config.local.js` 
const EasyWebpack = require('@easy-team/easywebpack-vue');
exports.webpack = {
  webpackConfigList:EasyWebpack.getWebpackConfig() 
};
```

#### 4.2 方式二: 自己编写Webpack配置

编写配置请见 tag `1.0.0`  build目录代码实现

```js
`config/config.local.js` 
exports.webpack = {
  webpackConfigList: [
    require(path.join(app.baseDir, 'build/client')), // http://127.0.0.1:9000
  ]
};
```

#### 4.3 方式三: 开启多进程编译

[egg npm start 启动开启多进程编译](http://hubcarl.github.io/easywebpack/vue/version/)


构建会同时启动两个 webpack 构建服务, 客户端js构建(build/client), 服务端构建(build/server), 默认端口9000,  webpackConfigList 端口依次递增. 


## 5. 项目结构和基本规范

    ├── app
    │   ├── controller
    │   │   ├── test
    │   │   │   └── test.js
    │   ├── extend
    │   ├── lib
    │   ├── middleware
    │   ├── mocks
    │   ├── proxy
    │   ├── router.js
    │   ├── view
    │   │   ├── about                         // 服务器编译的jsbundle文件
    │   │   │   └── about.js
    │   │   ├── home
    │   │   │     └── home.js                 // 服务器编译的jsbundle文件
    │   │   └── layout                        // 用于根据指定的layout生成对应的html页面, 用于服务器渲染失败时,采用客户端渲染
    │   │       └── layout.html
    │   └── web                               // 前端工程目录
    │       ├── asset                         // 存放公共js,css资源
    │       ├── framework                     // 前端公共库和第三方库
    │       │   ├── fastclick
    │       │   │   └── fastclick.js
    │       │   ├── sdk
    │       │   │   ├── sdk.js
    │       │   ├── storage
    │       │   │   └── storage.js
    │       │   └── vue                           // 与vue相关的公开代码
    │       │       ├── app.js                    // 前后端调用入口, 默认引入componet/directive/filter
    │       │       ├── component.js              // 组件入口, 可以增加component目录,类似下面的directive
    │       │       ├── directive                 // directive 目录,存放各种directive组件
    │       │       ├── directive.js              // directive引用入口
    │       │       └── filter.js                 // filter引用入口
    │       ├── page                              // 前端页面和webpack构建目录, 也就是webpack打包配置entryDir
    │       │   ├── home                          // 每个页面遵循目录名, js文件名, scss文件名, vue文件名相同
    │       │   │   ├── home.scss
    │       │   │   ├── home.vue
    │       │   │   ├── images                    // 页面自有图片,公共图片和css放到asset下面
    │       │   │   │   └── icon_more.png
    │       │   │   └── w-week                    // 页面自有组件,公共组件放到widget下面
    │       │   │       ├── w-week.scss
    │       │   │       └── w-week.vue
    │       │   └── test                          // 每个页面遵循目录名, js文件名, scss文件名, vue文件名相同
    │       │       └── test.vue
    │       ├── store                             // 引入vuex 的基本规范, 可以分模块
    │       │   ├── app
    │       │   │   ├── actions.js
    │       │   │   ├── getters.js
    │       │   │   ├── index.js
    │       │   │   ├── mutation-type.js
    │       │   │   └── mutations.js
    │       │   └── store.js
    │       └── component                         // 公共业务组件, 比如loading, toast等, 遵循目录名, js文件名, scss文件名, vue文件名相同
    │           ├── loading
    │           │   ├── loading.scss
    │           │   └── loading.vue
    │           ├── test
    │           │   ├── test.vue
    │           │   └── test.scss
    │           └── toast
    │               ├── toast.scss
    │               └── toast.vue
    ├── build                                   //  webpack 自定义配置入口, 会与默认配置进行合并(看似这么多,其实这里只是占个位说明一下)
    │   ├── base
    │   │   └── index.js                        // 公共配置        
    │   ├──  client                             // 客户端webpack编译配置
    │   │   ├── dev.js
    │   │   ├── prod.js
    │   │   └── index.js
    │   ├──  server                             // 服务端webpack编译配置
    │   │    ├── dev.js
    │   │    ├── prod.js
    │   │    └── index.js
    │   └── index.js
    ├── config
    │   ├── config.default.js
    │   ├── config.local.js
    │   ├── config.prod.js
    │   ├── config.test.js
    │   └── plugin.js
    ├── doc
    ├── index.js
    ├── public                                 // webpack编译目录结构, render文件查找目录
    │   ├── manifest.json                      // 资源依赖表
    │   ├── static
    │   │   ├── css
    │   │   │   ├── home
    │   │   │   │   ├── home.07012d33.css
    │   │   │   └── test
    │   │   │       ├── test.4bbb32ce.css
    │   │   ├── img
    │   │   │   ├── change_top.4735c57.png
    │   │   │   └── intro.0e66266.png
    │   ├── test
    │   │   └── test.js
    │   └── vendor.js                         // 生成的公共打包库


## 6. 功能实现

支持多页面/单页面服务端渲染, 前端渲染, 静态页面三种方式.


### 6.1 多页面服务端渲染/前端渲染同构实现

#### 6.1.1 多页面前端页面实现

在app/web/page 目录下面创建home目录, home.vue 文件, Webpack自动根据.vue文件创建entry入口, 具体实现请见[webpack.config.js](webpack.config.js)

- home.vue 编写界面逻辑, 根元素为layout(自定义组件, 全局注册, 统一的html, meta, header, body)

```html
<template>
  <layout title="基于egg-vue-webpack-dev和egg-view-vue插件的工程示例项目" description="vue server side render" keywords="egg, vue, webpack, server side render">
   {{message}}
  </layout>
</template>
<style>
  @import "home.css";
</style>
<script type="text/babel">

  export default {
    components: {

    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }
</script>
```


#### 6.1.2 多页面后端渲染实现, 通过 `egg-view-vue-ssr` 插件 `render` 方法实现
  
- 创建controller文件home.js

```javascript
exports.index = function* (ctx) {
  yield ctx.render('home/home.js', { message: 'vue server side render!' });
};
```

- 添加路由配置

```javascript
app.get('/home', app.controller.home.home.index);
```

#### 6.1.3 多页面走前端渲染(后端路由)实现, 通过 `egg-view-vue-ssr` 插件 `renderClient` 方法实现  

- 创建controller文件home.js

```javascript
exports.client = function* (ctx) {
  yield ctx.renderClient('home/home.js', { message: 'vue server side render!' });
};
```

- 添加路由配置

```javascript
app.get('/client', app.controller.home.home.client);
```

#### 6.1.4 HTML静态页面前端渲染

- 直接有easywebpack构建出静态HTML文件, 请见 `webpack.config.js` 配置和 `app/web/page/html`代码实现

- 通过 `egg-static` 静态文件访问HTML文件


### 6.2 单页面服务器渲染同构实现

#### 6.2.1 单页面前端实现

在app/web/page 目录下面创建app目录, app.vue, app.js 文件.

- app.vue 编写界面逻辑, 根元素为layout(自定义组件, 全局注册, 统一的html, meta, header, body)

```html
<template>
  <app-layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </app-layout>
</template>
<style lang="sass">

</style>
<script type="text/babel">
  export default {
    computed: {

    },
    mounted(){

    }
  }
</script>
```

- app.js 页面调用入口

```javascript
import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from 'component/app/router';
import app from './app.vue';
import App from 'app';
import Layout from 'component/layout/app';

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
  base: '/app',
  ...app,
  router,
  store
});

```

#### 6.2.2 单页面后端实现

- 创建controller文件app.js

```javascript
exports.index = function* (ctx) {
  yield ctx.render('app/app.js', { url: this.url.replace(/\/app/, '') });
};
```

- 添加路由配置

```javascript
  app.get('/app(/.+)?', app.controller.app.app.index);
```


## License

[MIT](LICENSE)
