<template>
  <layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </layout>
</template>
<script type="text/babel">
import Vue from "vue";
import { sync } from "vuex-router-sync";
import store from "./store/app";
import router from "./component/router";
import Layout from "component/layout/app";
// import createI18n from 'framework/i18n';
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);
sync(store, router);

export default {
  router,
  store,
  // i18n: createI18n(),
  computed: {},
  mounted() {}
};
</script>
