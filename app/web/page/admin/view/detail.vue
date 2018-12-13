<template>
  <div class="article-detail" v-if="article">
    <h1>{{article.title}}</h1>
    <iframe v-if="article.url" :src="article.url" frameborder="0" width="100%" height="600"></iframe>
    <div class="marktext" v-else v-html="article.content"></div>
  </div>
</template>
<style>
.article-detail {
  text-align: center
}
</style>
<script type="text/babel">
  import { SET_ARTICLE_DETAIL } from '../store/mutation-type';
  export default {
    computed: {
      article() {
        return this.$store.state.article;
      }
    },
    methods: {
      fetchApi({ state, dispatch, commit }) {
        const { id } = state.route.params;
        return dispatch(SET_ARTICLE_DETAIL, { id })
      },
    }
  }
</script>
