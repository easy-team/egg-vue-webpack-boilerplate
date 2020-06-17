<template>
  <layout 
    description="vue server side render" 
    keywords="egg, vue, webpack, server side render">
    <div class="container">
      <h2>easyjs</h2>
      <video 
        :src="videoUrl" 
        controls 
        muted 
        autoplay="autoplay" 
        width="400px" 
        height="200px"/>
    </div>
  </layout>
</template>
<style>
  @import 'about.css';
</style>
<script type='babel'>
import videoUrl from 'asset/medias/red.mp4'
export default {
  components: {
      
  },
  data(){
    return {
      videoUrl
    }
  },
  computed: {
      
  },
  mounted() {
    
  },
  methods: {
     
  },
}
</script>

