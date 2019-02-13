<template>
  <html v-if="isNode">
    <head>
      <title></title>
      <meta name="keywords" :content="keywords">
      <meta name="description" :content="description">
      <meta http-equiv="content-type" content="text/html;charset=utf-8">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </head>
    <template v-html="css"></template>
    <body class="admin">
      <div id="app"><div><slot></slot></div></div>
    </body>
    <template v-html="js"></template>
  </html>
  <div v-else-if="isBrowser" id="app"><div><slot></slot></div></div>
</template>
<script type='babel'>
  export default {
    props: ['keywords', 'description', 'css', 'js'],
    computed:{
      isNode() {
        return EASY_ENV_IS_NODE;
      },
      isBrowser() {
        return EASY_ENV_IS_BROWSER;
      },
      h1() {
        return '<h1>11111</h1>'
      }
    }
  }
</script>

