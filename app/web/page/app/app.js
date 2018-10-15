import app from './app.vue';
import App from 'app';

export default new App({
  base: '/app',
  ...app,
}).bootstrap();
