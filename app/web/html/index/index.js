import App from 'app';
import Index from './index.vue';
import HtmlLayout from 'component/layout/html';

App.component(HtmlLayout.name, HtmlLayout);
export default App.init({
  ...Index
});
