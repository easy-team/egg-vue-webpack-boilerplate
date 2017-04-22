import App from 'app';
import ElementUI from 'element-ui';
import Router from './router.vue';
App.use(ElementUI);
export default App.init({
  ...Router
});
