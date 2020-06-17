import Layout from 'component/layout/index';
import plugin from 'framework/plugin';

// vue-entry-loader 自定义全局注册钩子，如果在该目录下面存在该 template.js 框架自动加载，用于注册全局的组件
export default function(Vue) {
  Vue.use(plugin);
  Vue.component(Layout.name, Layout);
}