<template>
  <header class="header">
    <div class="container"><h1>
      <a href="/" class="router-link-active">Egg + Vue</a></h1>
      <ul class="nav">
        <li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}">{{ $t('menu.server') }}</a></li>
        <li class="nav-item"><a href="/client" :class="{'active' : selectedMenu === '/client'}">{{ $t('menu.client') }}</a></li>
        <li class="nav-item"><a href="/dynamic" :class="{'active' : selectedMenu === '/dynamic'}">{{ $t('menu.dynamic') }}</a></li>
        <!--<li class="nav-item"><a href="/public/html/home/index.html" :class="{'active' : selectedMenu === '/public/html/home/index.html'}">Html</a></li>-->
        <li class="nav-item"><a href="/element" :class="{'active' : selectedMenu === '/element'}">{{ $t('menu.element') }}</a></li>
        <li class="nav-item"><a href="/app" :class="{'active' : selectedMenu === '/app'}">{{ $t('menu.single') }}</a></li>
      </ul>
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
        selectedMenu : '/'
      }
    },
    computed:{
    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase();
    }
  }
</script>
