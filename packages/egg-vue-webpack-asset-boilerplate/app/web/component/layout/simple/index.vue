<template>
  <html v-if="isNode">
    <head>
      <title>{{ meta.title }}</title>
      <meta 
        :content="meta.keywords" 
        name="keywords">
      <meta 
        :content="meta.description" 
        name="description">
      <meta 
        http-equiv="content-type" 
        content="text/html;charset=utf-8">
      <meta 
        name="viewport" 
        content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
      <link 
        rel="shortcut icon" 
        href="/favicon.ico" 
        type="image/x-icon" >
    </head>
    <body>
      <div 
        id="app" 
        data-server-rendered="true"><slot/></div>    
    </body>
  </html>
  <div 
    v-else-if="!isNode" 
    id="app"><slot/></div>
</template>
<style>
</style>
<script type='babel'>
export default {
  props: ['meta'],
  data() {
    return {
      isNode: EASY_ENV_IS_NODE
    }
  }
}
</script>