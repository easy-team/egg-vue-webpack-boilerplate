<template>
  <AdminLayout :title="title">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </AdminLayout>
</template>
<script type="text/babel">
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import createI18n from 'framework/i18n/admin';
import store from './store/app';
import router from './router';
import AdminLayout from 'component/layout/admin';

Vue.use(VueI18n);
Vue.use(ElementUI);

export default {
  router,
  store,
  components: {
    AdminLayout,
  },
  // data() {
  //   return {
  //     title: this.$store.state.title
  //   }
  // },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  hook :{
    render(context, options) {
      const i18n = createI18n(context.state.locale);
      options.i18n = i18n;
    }
  },
  mounted() {},
};
</script>
