<template>
  <AdminLayout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </AdminLayout>
</template>
<script type="text/babel">
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { sync } from 'vuex-router-sync';
import 'element-ui/lib/theme-chalk/index.css';
import createI18n from 'framework/i18n/admin';
import Layout from 'component/layout/admin';
import store from './store/app';
import router from './router';

Vue.use(VueI18n);
Vue.use(ElementUI);
sync(store, router);

export default {
  router,
  store,
  components: {
    AdminLayout: Layout,
  },
  computed: {},
  mounted() {},
  hookRender(context, options) {
    const i18n = createI18n(context.state.locale);
    options.i18n = i18n;
  }
};
</script>
