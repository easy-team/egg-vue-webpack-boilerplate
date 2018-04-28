<template>
  <layout>
    <div>
      <div class="first">动态动态渲染</div>
      <div class="second">
        <!-- <component :is="name"></component> -->
        <async></async>
        <client v-if="isBrowser"></client>
        <client2></client2>
      </div>
    </div>
  </layout>
</template>
<style lang="scss">
@import "./dynamic.scss";
</style>
<script type="text/babel">
  // import loading from './component/loading.vue'
  // import error from './component/error.vue'
  // const async = () => ({
  //   component:  () => import('./component/async.vue'),
  //   loading,
  //   error,
  //   delay: 100,
  //   timeout: 1000
  // });
  import client from './component/client.vue'
  export default {
    name: 'dynamic',
    data () {
      return {
        isBrowser: EASY_ENV_IS_BROWSER
      }
    },
    components: {
      async : () => import('./component/async.vue'),
      client : () => import('./component/client.vue')
    },
    beforeMount() {
      this.$options.components.client2 = () => import('./component/client.vue');
    },
  }
</script>

