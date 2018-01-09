<template>
  <layout>
    <div>
      <div class="first">动态动态渲染</div>
      <div class="second">
        <!-- <component :is="name"></component> -->
        <async></async>
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
  export default {
    name: 'dynamic',
    data () {
      return {
        show: true
      }
    },
    components: {
      async : () => import('./component/async.vue')
    }
  }
</script>

