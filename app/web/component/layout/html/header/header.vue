<template>
  <header class="header">
    <div class="container"><h1>
      <a href="/" class="router-link-active">client-render</a></h1>
      <ul class="nav">
        <li class="nav-item"><a href="http://127.0.0.1:7001" :class="{'active' : selectedMenu === '/'}">Home</a></li>
        <li class="nav-item"><a href="/public/html/index/index.html" :class="{'active' : selectedMenu === '/public/html/index/index.html'}">Client-Render</a></li>
        <li class="nav-item"><a href="/public/html/front/front.html" :class="{'active' : selectedMenu === '/public/html/front/front.html'}">Client-Render-Element</a></li>
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
