<template>
  <layout description='vue server side render' keywords='egg, vue, webpack, server side render'>
     <div class='container'>
        <h2>{{ message }}</h2>
        <el-button type="primary">element-ui</el-button>
     </div>
  </layout>
</template>
<style>
  @import 'category.css';
</style>
<script type='babel'>
  import Vue from 'vue';
  import { Button, Select } from 'element-ui';
  Vue.use(Button);
  export default {
    components: {

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
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/public/sw-category.js');
      }
    }
  }
</script>

