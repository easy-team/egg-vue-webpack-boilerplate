<template>
  <Layout>
    <transition 
      name="fade" 
      mode="out-in">
      <router-view/>
    </transition>
  </Layout>
</template>
<script type="text/babel">
import '../../asset/css/bootstrap.css';
import Layout from 'component/layout/spa/index.vue';
export default {
  components: {
    Layout,
  },
  mounted() {},
};
</script>
