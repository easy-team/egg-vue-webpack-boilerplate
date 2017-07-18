<template>
  <header class="header">
    <div class="container"><h1>
      <a href="/" class="router-link-active">client-render</a></h1>
      <ul class="nav">
        <li class="nav-item"><a :href="htmlLink" :class="{'active' : selectedMenu === '/'}">Home</a></li>
        <li class="nav-item"><a href="/public/html/home/index.html" :class="{'active' : selectedMenu === '/public/html/home/index.html'}">Client-Render</a></li>
        <li class="nav-item"><a href="/public/html/element/front.html" :class="{'active' : selectedMenu === '/public/html/element/front.html'}">Client-Render-Element</a></li>
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
      htmlLink(){
        if(typeof PROD === 'boolean' && PROD){
          return '/';
        }
        return 'http://127.0.0.1:7001';
      }
    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase();
    }
  }
</script>
