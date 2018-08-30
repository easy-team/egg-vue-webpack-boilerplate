import Vue from 'vue';
import VueI18n from 'vue-i18n';
import '../filter';
import '../directive';
import '../component';
import createI18n from 'framework/i18n';
Vue.use(VueI18n);
export default function render(options) {
  if (options.store && options.router) {
    return context => {
      options.router.push(context.state.url);
      const matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({ code: '404' });
      }
      return Promise.all(
        matchedComponents.map(component => {
          if (component.preFetch) {
            return component.preFetch(options.store);
          }
          return null;
        })
      ).then(() => {
        context.state = Object.assign(options.store.state, context.state);
        const i18n = createI18n(context.state.locale);
        const opts = { i18n, ...options };
        return new Vue(opts);
      });
    };
  }
  return context => {
    const i18n = createI18n(context.state.locale);
    const VueApp = Vue.extend(options);
    const app = new VueApp({ data: context.state, i18n });
    return new Promise(resolve => {
      resolve(app);
    });
  };
}