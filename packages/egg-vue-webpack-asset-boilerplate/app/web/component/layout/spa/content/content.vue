<template>
  <div class="main">
    <div class="page-container page-component">
      <slot name="content"/>
    </div>
  </div>
</template>
<style>
  @import "content.css";
</style>
<script type="text/babel">
export default{
  name:'VContent',
  components: {},
  data(){
    return {}
  },
  mounted() {

  }
}
</script>
