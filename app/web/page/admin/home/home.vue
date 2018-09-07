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
import { sync } from 'vuex-router-sync';
import Layout from 'component/layout/admin';
import store from './store/app';
import router from './router';
import '../../../theme/index.css';
import '../../../asset/css/font-awesome.min.css';

Vue.use(ElementUI);
sync(store, router);

export default {
  router,
  store,
  components: {
    AdminLayout: Layout,
  },
  computed: {},
  mounted() {}
};

</script>
