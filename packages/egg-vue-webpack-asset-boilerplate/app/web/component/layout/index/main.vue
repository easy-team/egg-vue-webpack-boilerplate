<template>
  <div class="main">
    <LayoutHeader/>
    <LayoutContent>
      <div slot="content"><slot name="main"/></div>
    </LayoutContent>
  </div>
</template>
<style>
</style>
<script type='babel'>
import LayoutHeader from './header/header';
import LayoutContent from './content/content';
export default {
  components: {
    LayoutHeader,
    LayoutContent
  }
};
</script>
