# egg-vue-webpack-boilerplate

基于Vue多页面和单页面服务器渲染同构工程骨架项目


## 依赖

- [egg-view-vue](https://github.com/hubcarl/egg-view-vue) egg view plugin for vue.
- [egg-view-vue-ssr](https://github.com/hubcarl/egg-view-vue-ssr) vue server side render solution for egg-view-vue.
- [easywebpack](https://github.com/hubcarl/easywebpack) programming instead of configuration, webpack is no longer complex.
- [egg-webpack](https://github.com/hubcarl/egg-webpack) webpack dev server plugin for egg, support read file in memory and hot reload.
- [egg-webpack-vue](https://github.com/hubcarl/egg-webpack-vue) egg webpack building solution for vue.


说明: easywebpack, egg-webpack, egg-webpack-vue 由 [egg-vue-webpack-dev](https://github.com/hubcarl/egg-vue-webpack-dev)分离而来, 保证功能单一, 可以扩展更多基于webpack的打包方案, 比如vue, react.

基于旧版[egg-vue-webpack-dev](https://github.com/hubcarl/egg-vue-webpack-dev)插件编译的请切换到该项目的[egg-vue-webpack-dev](https://github.com/hubcarl/egg-vue-webpack-boilerplate/tree/egg-vue-webpack-dev)分支


## 特性

- 基于vue + axios 多页面服务器客户端同构实现

- 基于vue + vuex + vue-router + axios 单页面服务器客户端同构实现


## 使用

- 启动项目

```bash
npm install
npm start
```

![npm start启动](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/doc/images/webpack.png)

访问: http://127.0.0.1:7001


- 项目构建

```bash
// 本地开发使用(build/client.js)
npm run build-dev

// 发布包构建(build/server.js)
npm run build-prod

```


## 项目结构和基本规范

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
    │       │   │   ├── home.js                   // 服务器render渲染时, 传入 render('home/home.js', data)
    │       │   │   ├── home.scss
    │       │   │   ├── home.vue
    │       │   │   ├── images                    // 页面自有图片,公共图片和css放到asset下面
    │       │   │   │   └── icon_more.png
    │       │   │   └── w-week                    // 页面自有组件,公共组件放到widget下面
    │       │   │       ├── w-week.scss
    │       │   │       └── w-week.vue
    │       │   └── test                          // 每个页面遵循目录名, js文件名, scss文件名, vue文件名相同
    │       │       ├── test.js                   // 服务器render渲染时, 传入 render('test/test.js', data)
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
    │   ├── build.js                            //  webpack 本地执行打包入口
    │   ├── webpack.base.conf.js                //  webpack 自定义配置公共配置
    │   ├── webpack.client.dev.conf.js          //  webpack 自定义前端渲染开发配置
    │   ├── webpack.client.prod.conf.js         //  webpack 自定义前端渲染测试配置
    │   ├── webpack.client.test.conf.js         //  webpack 自定义前端渲染生产配置
    │   ├── webpack.server.dev.conf.js          //  webpack 自定义后端渲染开发配置
    │   ├── webpack.server.prod.conf.js         //  webpack 自定义后端渲染测试配置
    │   └── webpack.server.test.conf.js         //  webpack 自定义后端渲染生产配置
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


## 功能实现

### 一.多页面服务器渲染同构实现

#### 1.多页面前端页面实现

在app/web/page 目录下面创建about目录, about.vue, about.js 文件.

- about.vue 编写界面逻辑, 根元素为layout(自定义组件, 全局注册, 统一的html, meta, header, body)

```html
<template>
  <layout title="基于egg-vue-webpack-dev和egg-view-vue插件的工程示例项目" description="vue server side render" keywords="egg, vue, webpack, server side render">
   {{message}}
  </layout>
</template>
<style>
  @import "about.css";
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

- about.js 页面调用入口

```javascript
import Vue from 'vue';
import About from './about.vue';
import App from 'app';
export default App.init({
  ...About
});

```

#### 2.多页面后端实现

- 创建controller文件about.js

```javascript
exports.index = function* (ctx) {
  yield ctx.render('about/about.js', { message: 'vue server side render!' });
};
```

- 添加路由配置

```javascript
app.get('/about', app.controller.about.about.index);
```

### 二.单页面服务器渲染同构实现

#### 1.单页面前端实现

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

#### 2.单页面后端实现

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


## 工程实例


- 基于vue + axios 多页面服务器客户端同构入口: http://127.0.0.1:7001

![多页面服务器渲染](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/doc/images/vue-mutil-page.png)


- 基于vue + vuex + vue-router + axios 单页面服务器客户端同构入口: http://127.0.0.1:7001/app

![单页面服务器](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/doc/images/vue-single-page.png)


## 实现原理

- [基于webpack的前端工程解决方案和egg+vue服务端渲染项目实践](http://hubcarl.github.io/blog/2017/04/15/webpack-project/)

- [koa和egg项目webpack内存编译和热更新实现](http://hubcarl.github.io/blog/2017/04/15/egg-webpack/)


## License

[MIT](LICENSE)