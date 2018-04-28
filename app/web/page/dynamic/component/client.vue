<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>isNode:{{isNode}}</h2>
    <h2>isBrowser:{{isBrowser}}</h2>
    <h2>clientHeight: {{ clientHeight }} px </h2>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'async',
    data(){
      return {
        isNode: EASY_ENV_IS_NODE,
        isBrowser: EASY_ENV_IS_BROWSER,
        message: 'vue ssr server client render'
      }
    },
    computed :{
      clientHeight() {
        return document.body.clientHeight;
      }
    },
    mounted(){
      this.$http.get(`${location.origin}/pager?pageIndex=1&pageSize=10`).then(res => {
        console.log('res', res);
        if(res.data.list && res.data.list.length){
          this.list = res.data.list;
        }
      });
    }
  }
</script>

<style scoped>
</style>