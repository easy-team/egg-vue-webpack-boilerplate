import App from 'app';
import ElementUI from 'element-ui';
import Element from './element.vue';
App.use(ElementUI);
export default App.init({
  ...Element
});
