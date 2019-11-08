<template>
  <div style="font-size: 24px; text-align: center">
    <h1>{{article.title}}</h1>
    <iframe :src="article.url" frameborder="0" width="100%" height="600"></iframe>
  </div>
</template>
<style>
</style>
<script type="text/babel">
import { SET_ARTICLE_DETAIL } from '../store/app/mutation-type';
  export default{
    computed: {
      article() {
        return this.$store.state.article;
      }
    },
    methods: {
      fetchApi(store, route) {
        const id = route.params.id;
        return store.dispatch(SET_ARTICLE_DETAIL, { id })
      }    
    },
  }
</script>