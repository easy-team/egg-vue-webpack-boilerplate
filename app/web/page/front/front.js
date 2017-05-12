import App from 'app';
import ElementUI from 'element-ui';
import Front from './front.vue';
App.use(ElementUI);
export default App.client({
  ...Front
});
