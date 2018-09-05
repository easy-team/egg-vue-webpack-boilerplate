# egg-vue-webpack-boilerplate

基于 Egg + Vue + Webpack4 多页面服务端渲染项目开发模板


## 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,  Node 6.x.x 版本请见 [Egg 1.0 + Node6分支](https://github.com/hubcarl/egg-vue-webpack-boilerplate/tree/node6)
- Webpack 版本: ^4.x.x, 对应 `easywebpack-vue` 版本为 ^4.x.x
- Vue 版本: ^2.5.0

## 说明 

- Egg + TypeScript 已初步支持， 包括 Node 端 typescript 编写 和 前端 TypeScript编写, 具体请见(https://github.com/hubcarl/egg-vue-typescript-boilerplate)项目
- 项目开发之前, 请阅读[Egg + Vue 服务端渲染开发指南](https://zhuanlan.zhihu.com/p/30445536) 和 [Egg + Vue 服务端渲染工程化实现](https://zhuanlan.zhihu.com/p/29838551)
- 版本变更情况请看发布版本说明[RELEASE](RELEASE.md) 
- 如果你需要了解 Egg+Vue+Webpack 项目更多信息，请扫以下二维码加好友，请备注：Node.js

![hubcarl](https://avatars3.githubusercontent.com/u/4983042?v=4&u=0befb64a57a7911c630b7f97df5632385b08da2a&s=250)

## 文档

- http://hubcarl.github.io/easywebpack/vue/rule
- https://zhuanlan.zhihu.com/easywebpack


## 1.特性

- 支持服务端渲染, 前端渲染, 静态页面渲染三种方式,

- 支持单页面, 多页面服务端渲染, 前端渲染模式

- 支持 server 和 client 端代码修改, webpack 时时编译和热更新, `npm start` 一键启动应用

- 基于 vue + axios 多页面服务端渲染, 客户端渲染同构实现

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 基于 easywebpack 基础配置, 使用 es6 class 继承方式编写webpack配置 和 cli 构建

- 支持开发环境, 测试环境，正式环境 webpack 编译

- 支持 js/css/image 资源依赖, 内置支持CDN特性

- 支持 css/sass/less 样式编写

- 支持根据 .vue 文件自动创建 webpack entry 入口文件

- egg-webpack ^3.2.4 版本开始支持多进程编译

- easywebpack ^3.5.0 版本开始支持 webpack dll 自动化构建, 与多进程编译结合，构建速度减少 2/3

- 支持Vue组件异步加载, 具体实例请看[app/web/page/dynamic](app/web/page/dynamic)

- Node 8 版本的async和await特性, Controller 采用 class 方式编写

- 支持vue 2.3 官方VueSSRPlugin实现方案,代码分支[feature/VueSSRPlugin](https://github.com/hubcarl/egg-vue-webpack-boilerplate/tree/feature/VueSSRPlugin)

 

## 2.依赖

- [easywebpack](https://github.com/hubcarl/easywebpack) 
- [easywebpack-vue](https://github.com/hubcarl/easywebpack) 
- [egg-view-vue-ssr](https://github.com/hubcarl/egg-view-vue-ssr)
- [egg-webpack](https://github.com/hubcarl/egg-webpack) 
- [egg-webpack-vue](https://github.com/hubcarl/egg-webpack-vue)


## 3. 使用

#### 3.1 安装cli(非必需)

```bash
npm install easywebpack-cli -g
```

^3.5.0 开始， `easywebpack-cli` 已内置 `devDependencies` 中, 无需安装。如果你需要在命令行使用 `easy` 命令, 可以单独全局安装。

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

## 4. 配置说明(支持三种方式)

#### 4.1 方式一: `easywebpack-cli` 根据  `webpack.config.js` 自动创建Webpack Config 

```js
`config/config.local.js` 
const EasyWebpack = require('easywebpack-vue');
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
      require(path.join(app.baseDir, 'build/server')), // http://127.0.0.1:9001
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


## 7. 工程实例


- 基于vue + axios 多页面服务器客户端同构入口: http://127.0.0.1:7001

![多页面服务器渲染](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/docs/images/vue-mutil-page.png)


- 基于vue + vuex + vue-router + axios 单页面服务器客户端同构入口: http://127.0.0.1:7001/app

![单页面服务器](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/docs/images/vue-single-page.png)


## 8. 实现原理

### 8.1 本地`npm start`启动流程

![本地启动流程](http://hubcarl.github.io/img/webpack/npm-start.png)

### 8.2 服务端渲染页面访问流程

![服务端渲染页面访问流程](http://hubcarl.github.io/img/webpack/egg-webpack-vue-ssr.png)


### 8.3 详细资料

- [Egg+Vue解决方案开发流程](http://hubcarl.github.io/easywebpack/vue/dev/)

- [基于webpack的前端工程解决方案和egg+vue服务端渲染项目实践](http://hubcarl.github.io/blog/2017/04/15/webpack-project/)

- [koa和egg项目webpack内存编译和热更新实现](http://hubcarl.github.io/blog/2017/04/15/egg-webpack/)


## License

[MIT](LICENSE)
