import Vue from 'vue';
import ElementUI from 'element-ui';
import clientRender from 'client';
import serverRender from 'server';
import Layout from 'component/layout/default';
import login from './login.vue';
import '../../../theme/index.css';
import '../../../asset/css/font-awesome.min.css';

Vue.use(ElementUI);
Vue.component(Layout.name, Layout);
const options = {
  ...login,
};

export default EASY_ENV_IS_NODE ? serverRender(options) : clientRender(options);
