<template>
  <Entry />
</template>
<script type="text/babel">
import Entry from 'component/spa/index.vue';
import store from 'component/spa/store';
import router from 'component/spa/router';

export default {
  router,
  store,
  components: {
    Entry,
  },
  mounted() {},
};
</script>
