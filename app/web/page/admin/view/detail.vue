<template>
  <div class="content" v-if="article">
    <h1>{{article.title}}</h1>
    <iframe v-if="article.url" :src="article.url" frameborder="0" width="100%" height="600"></iframe>
    <div class="marktext" v-else v-html="article.content"></div>
  </div>
</template>
<style>
  .content {
    font-size: 24px; 
    text-align: center
  }
  .content .marktext {
    margin-top: 24px;
  }
</style>
<script type="text/babel">
  import { SET_ARTICLE_DETAIL } from '../store/mutation-type';
  export default {
    methods: {
      fetchApi({ $store, $router }) {
        const { id } = $router.currentRoute.params;
        return $store.dispatch(SET_ARTICLE_DETAIL, { id });
      }
    },
    computed: {
      article() {
        return this.$store.state.article;
      }
    }
  }
</script>
