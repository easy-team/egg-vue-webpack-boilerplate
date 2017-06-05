import MainLayout from './main';

export default {
  name: 'AppLayout',
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
  template: '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>'
};
