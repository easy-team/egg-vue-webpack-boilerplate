<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content">
        <slot name="main"></slot>
      </div>
    </LayoutContent>
  </div>
</template>
<style lang="css">
  body {
    margin: 0 0px;
  }

  a {
    text-decoration: none;
  }

  @import "../../../asset/css/global.css";
</style>
<script type="text/babel">
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  export default{
    components: {
      LayoutHeader,
      LayoutContent
    }
  }
</script>
