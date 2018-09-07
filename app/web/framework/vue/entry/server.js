import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';

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
          if (component.fetch) {
            return component.fetchApi(context.ctx, options.store);
          }
          return null;
        })
      ).then(() => {
        context.state = { ...options.store.state, ...context.state };
        return new Vue(options);
      });
    };
  }
  return context => {
    const VueApp = Vue.extend(options);
    const app = new VueApp({ data: context.state });
    return Promise.resolve(app);
  };
}