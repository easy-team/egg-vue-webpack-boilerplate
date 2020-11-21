<template>
  <html v-if="isNode">
    <head>
      <title>{{ title || 'Egg + Vue' }}</title>
      <meta 
        :content="keywords" 
        name="keywords">
      <meta 
        :content="description" 
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
      <div id="app"><MainLayout><div slot="main"><slot/></div></MainLayout></div>    
    </body>
  </html>
  <div 
    v-else-if="!isNode" 
    id="app"><MainLayout><div slot="main"><slot/></div></MainLayout></div>
</template>
<script type="text/babel">
import MainLayout from './main';
export default {
  components: {
    MainLayout
  },
  props: [ 'title', 'description', 'keywords' ],
  computed:{
    isNode() {
      return EASY_ENV_IS_NODE;
    }
  }
}
</script>
