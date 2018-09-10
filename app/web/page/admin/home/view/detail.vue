<template>
  <div style="font-size: 24px; text-align: center">
    vue-server-render detail <router-link to="/article/add">Add</router-link>
    <img src="../../../../asset/images/egg-vue-webpack-dev.png"/>
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default {
    methods: {
      fetchApi({ state, dispatch, commit }) {
        const { id } = state.route.params;
        return dispatch('FETCH_ARTICLE_DETAIL', { id })
      },
    },
    beforeMount() {
      const { id } = state.route.params;
      this.fetchApi(this.$sotre, { id });
    }
  }
</script>
