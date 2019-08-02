<template>
  <layout description='vue server side render' keywords='egg, vue, webpack, server side render'>
     <div class='container'>
       
       <Card><h2>{{ message }}</h2></Card>
     </div>
  </layout>
</template>
<style>
  @import 'category.css';
</style>
<script type='babel'>
  import Vue from 'vue';
  import { Card } from 'iview';
  // 注意注意注意注意 iview 按需引入仍然需要引入 css  see： https://www.iviewui.com/docs/guide/start
  import 'iview/dist/styles/iview.css';
  export default {
    components: {
      Card
    },
    data(){
      return {
      }
    },
    computed: {
      
    },
    methods: {
      
    },
    mounted() {
      // if('serviceWorker' in navigator) {
      //   navigator.serviceWorker.register('/public/sw-category.js');
      // }
    }
  }
</script>

