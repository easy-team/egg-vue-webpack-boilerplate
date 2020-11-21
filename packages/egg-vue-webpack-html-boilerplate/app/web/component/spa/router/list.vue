<template>
  <div class="container">
    <div 
      v-for="item in articleList" 
      :key="item.id" 
      class="row">
      <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
        <div class="post-preview">
          <div :href="item.url">
            <h2 class="post-title">
              <router-link 
                :to="'/detail/' + item.id" 
                class="nav-item-a">{{
                  item.title
                }}</router-link>
            </h2>
            <div class="post-content-preview">{{ item.summary }}</div>
          </div>
          <div class="post-meta">Posted by hubcarl on 17-09-24</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script type="text/babel">
export default {
  computed: {
    isLoading() {
      return false;
    },
    articleList() {
      return this.$store.state.articleList;
    },
  },
  asyncData({ state, dispatch, commit }) {
    return dispatch('FETCH_ARTICLE_LIST');
  },
};
</script>
