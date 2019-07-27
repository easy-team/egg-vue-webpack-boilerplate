import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';

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
        return new Vue(options);
      });
    };
  }
  return context => {
    const data = Object.assign({}, context.state, options.data && options.data())
    options.data = function () {
      return data
    };
    const app = new Vue({
      render: (h) => h(options)
    });
    return new Promise(resolve => {
      resolve(app);
    });
  };
}
