<template>
  <div id='async'>
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
          <ul class="smart-artiles" id="articleList">
            <li v-for="item in list">
              <div class="point">+{{item.hits}}</div>
              <div class="card">
                <h2><a :href="item.url" target="_blank">{{item.title}}</a></h2>
                <div>
                  <ul class="actions">
                    <li>
                      <time class="timeago">{{item.moduleName}}</time>
                    </li>
                    <li class="tauthor">
                      <a href="#" target="_blank" class="get">Sky</a>
                    </li>
                    <li><a>+收藏</a></li>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'async',
    data(){
      return {
        list:[]
      }
    },
    mounted(){
      this.$http.get(`${location.origin}/pager?pageIndex=1&pageSize=10`).then(res => {
        console.log('res', res);
        if(res.data.list && res.data.list.length){
          this.list = res.data.list;
        }
      });
    }
  }
</script>

<style scoped>
</style>