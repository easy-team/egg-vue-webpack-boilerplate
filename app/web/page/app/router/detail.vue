<template>
  <div style="font-size: 24px; text-align: center">
    <h1>{{article.title}}</h1>
    <iframe :src="article.url" frameborder="0" width="100%" height="600"></iframe>
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    computed: {
      article() {
        return this.$store.state.article;
      }
    },
    preFetch({ state, dispatch, commit }) {
      const { id } = state.route.params;
      return Promise.all([
        dispatch('FETCH_ARTICLE_DETAIL', { id })
      ]);
    },
    beforeMount() {
      const { id } = this.$store.state.route.params;
      return Promise.all([
        this.$store.dispatch('FETCH_ARTICLE_DETAIL', { id })
      ]);
    }
  }
</script>
