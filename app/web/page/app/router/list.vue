<template>
  <div style="font-size: 24px; text-align: center">
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
          <ul class="smart-artiles" id="articleList">
            <li v-for="item in articleList" :key="item.id">
              <div class="point">+{{item.hits}}</div>
              <div class="card">
                <h2><router-link :to="'/detail/'+item.id" class="nav-item-a">{{item.title}}</router-link></h2>
                <div>
                  <ul class="actions">
                    <li>
                      <time class="timeago">{{item.moduleName}}</time>
                    </li>
                    <li class="tauthor">
                      <a href="#" target="_blank" class="get">Sky</a>
                    </li>
                    <li><a :href="item.url" target="_blank">原文</a></li>
                    <li>
                      <span class="timeago">{{item.summary}}</span>
                    </li>
                    <li>
                      <span class="timeago"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div id="pagerBottom" class="smart-pager" v-if="isLoading">
            <img src="../../../asset/images/loading.gif">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    computed: {
      isLoading(){
       return false;
      },
      articleList() {
        return this.$store.state.articleList;
      }
    },
    asyncData ({ state, dispatch, commit }) {
      return dispatch('FETCH_ARTICLE_LIST')
    }
  }
</script>
