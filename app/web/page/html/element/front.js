import App from 'app';
import ElementUI from 'element-ui';
App.use(ElementUI);

import Front from './front.vue';

export default App.client({
  ...Front
});
