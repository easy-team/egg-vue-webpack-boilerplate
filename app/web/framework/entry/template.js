import Layout from 'component/layout/index';
import plugin from 'framework/plugin';

export default function(Vue) {
  Vue.use(plugin);
  Vue.component(Layout.name, Layout);
}