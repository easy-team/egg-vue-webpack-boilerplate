<template>
  <layout description='vue server side render' keywords='egg, vue, webpack, server side render'>
    <content-loader v-if="loading">
      <rect x="40" y="0" rx="3" ry="3" width="250" height="20" />
    </content-loader>
     <div class='container' v-else>
        <h2>{{ message }}</h2>
     </div>
  </layout>
</template>
<style>
@import "category.css";
</style>
<script type='babel'>
import { ContentLoader } from "vue-content-loader";
export default {
  components: {
    ContentLoader
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {},
  methods: {},
  mounted() {
    this.loading = false;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/public/sw-category.js");
    }
  }
};
</script>

