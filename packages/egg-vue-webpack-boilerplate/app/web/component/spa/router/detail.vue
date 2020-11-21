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
  asyncData({ state, dispatch, commit }) {
    const { id } = state.route.params;
    return dispatch('FETCH_ARTICLE_DETAIL', { id });
  },
};
</script>
