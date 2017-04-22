<template>
  <header class="header">
    <div class="container"><h1>
      <a href="/" class="router-link-active">vue-multi-page</a></h1>
      <ul class="nav">
        <li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}">Home</a></li>
        <li class="nav-item"><a href="/element" :class="{'active' : selectedMenu === '/element'}">Element</a></li>
        <li class="nav-item"><a href="/app" :class="{'active' : selectedMenu === '/app'}">Single</a></li>
        <li class="nav-item"><a href="/about" :class="{'active' : selectedMenu === '/about'}">About</a></li>
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
