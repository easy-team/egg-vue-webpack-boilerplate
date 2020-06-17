<template>
  <div style="font-size: 24px; text-align: center">
    <h1>{{ article.title }}</h1>
    <iframe
      :src="article.url"
      frameborder="0"
      width="100%"
      height="600"
    />
  </div>
</template>
<style>
</style>
<script type="text/babel">
export default {
  computed: {
    article() {
      return this.$store.state.article;
    },
  },
  asyncData({ state, dispatch, commit }, route) {
    // console.log('>>state route', state, route); 
    const { id } = route.params;
    return dispatch('FETCH_ARTICLE_DETAIL', { id });
  },
};
</script>
