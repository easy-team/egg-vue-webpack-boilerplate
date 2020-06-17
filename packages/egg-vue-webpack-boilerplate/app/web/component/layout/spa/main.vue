<template>
  <div>
    <LayoutHeader/>
    <LayoutContent>
      <div slot="content"><slot name="main"/></div>
    </LayoutContent>
  </div>
</template>
<style>
</style>
<script type="text/babel">
import '../../../asset/css/bootstrap.css';
import '../../../asset/css/blog.css';
import LayoutHeader from './header/header';
import LayoutContent from './content/content';
export default{
  components: {
    LayoutHeader,
    LayoutContent
  }
}
</script>
