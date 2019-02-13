<template>
  <Layout :css="cssLink" :js="jsScript">
    <h1>Egg + Vue + Webpack: egg-webpack</h1>
  </Layout>
</template>
<style>
  @import 'index.css';
</style>
<script type='babel'>
  import Layout from '../../framework/layout.vue';
  export default {
    components: {
      Layout
    },
    data(){
      return {
      }
    },
    computed:{
    },
    methods: {
     
    },
    mounted() {
    
    }
  }
</script>

