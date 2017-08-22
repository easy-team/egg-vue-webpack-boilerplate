<template>
  <layout>
    <div>
      <div class="first">动态组件第一屏内容</div>
      <div class="btnTrigger" @click="show = true">点击我, 异步加载第二屏内容</div>
      <div class="second">
        <async v-if="show"></async>
      </div>
    </div>
  </layout>
</template>
<style lang="scss">
@import "./dynamic.scss";
</style>
<script type="text/babel">
  import loading from './component/loading.vue'
  import error from './component/error.vue'
  const async = () => ({
    component: new Promise(resolve => {
      setTimeout(()=> {
        resolve(import('./component/async.vue'));
      }, 1000);
    }),
    loading,
    error,
    delay: 100,
    timeout: 5000
  });
  export default {
    name: 'dynamic',
    data () {
      return {
        show: false
      }
    },
    components: {
      async
    }
  }
</script>

