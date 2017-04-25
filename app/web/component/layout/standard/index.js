
import MainLayout from './main';

const content = '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';

let template = 'app/web/view/layout.html?inline';

template = template.replace(/[<|\\x3c]!--vue-ssr-outlet--[>|\\x3e]/, content);

export default {
  name: 'Layout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
    MainLayout
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || 'egg-vue-webpack';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || 'egg, vue, webpack, server side render';
    },
    vDescription() {
      return this.$root.description || this.description || 'egg-vue-webpack server side render';
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  template: typeof window === 'object' ? content : template
};
