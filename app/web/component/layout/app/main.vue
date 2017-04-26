<template>
   <div>
     <LayoutHeader></LayoutHeader>
     <LayoutContent>
       <div slot="content"><slot name="main"></slot></div>
     </LayoutContent>
   </div>
</template>
<style>
  body{
    margin: 0 0px;
  }
  a{
    text-decoration: none;
  }
</style>
<script type="text/babel">
  import 'asset/css/global.css';
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  export default{
    components: {
      LayoutHeader,
      LayoutContent
    }
  }
</script>
