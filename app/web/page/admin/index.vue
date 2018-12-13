<template>
  <layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </layout>
</template>
<script type="text/babel">
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import 'element-ui/lib/theme-chalk/index.css';
import layout from 'component/layout/admin/index.vue';

Vue.use(VueI18n);
Vue.use(ElementUI);

export default {
  components: {
    layout,
  },
  computed: {},
  mounted() {},
};
</script>
