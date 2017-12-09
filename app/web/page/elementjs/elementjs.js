'use strict';
import App from 'app';
import ElementUI from 'element-ui';
import Element from './elementjs.vue';
import 'element-ui/lib/theme-chalk/index.css';
import './elementjs.css';
App.use(ElementUI);
console.log('11111111');
export default App.init({
  ...Element
});