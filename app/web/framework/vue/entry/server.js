import Vue from 'vue';
import plugin from '../plugin';
import '../filter';
import '../directive';
import '../component';
Vue.use(plugin);
export default function render(options) {
  if (options.store && options.router) {
    return context => {
      options.store.replaceState({ ...options.store.state, ...context.state });
      options.router.push({ path: context.state.url });
      const matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({ code: '404' });
      }
      return Promise.all(
        matchedComponents.map((component) => {
          if (component.methods && component.methods.fetchApi) {
            return component.methods.fetchApi(options.store);
          }
          return null;
        })
      ).then(() => {
        context.state = { ...options.store.state, ...context.state };
        const hookRender = options.hookRender || Vue.hookRender;
        if (hookRender) {
          hookRender(context, options);
        }
        return new Vue(options);
      });
    };
  }
  return context => {
    const VueApp = Vue.extend(options);
    const hookRender = options.hookRender || Vue.hookRender;
    const opts = { data: context.state };
    if (hookRender) {
      hookRender(context, opts);
    }
    return new VueApp(opts);
  };
}