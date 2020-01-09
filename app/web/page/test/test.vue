<template>
  <SimpleLayout :meta="meta">
     <div>
        <h1 style="text-align:center; display:none">{{site.name}}</h1>
        <iframe width="100%" height="800px" frameborder="no" :src="site.url"></iframe>
     </div>
  </SimpleLayout>
</template>
<style>
</style>
<script type='babel'>
  import SimpleLayout from 'component/layout/simple/index.vue';
  export default {
    components: {
      SimpleLayout
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
    
    }
  }
</script>

