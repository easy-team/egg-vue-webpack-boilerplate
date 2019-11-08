<template>
  <header class="header">
    <div class="container"><h1>
      <a href="" class="router-link-active">Egg Vue Server Side Render(SSR)</a></h1>
    </div>
  </header>
</template>
<style>
  @import "./header.css";
</style>
<script type="text/babel">
  export default{
    data(){
      return {
        selectedMenu : '/app'
      }
    },
    computed:{

    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase().replace(/\/$/,'');
    }
  }
</script>
