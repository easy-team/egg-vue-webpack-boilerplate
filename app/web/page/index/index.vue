<template>
  <layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <div class="container">
      <div class="row" v-for="item in lists" :key="item.id">
        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
          <div class="post-preview">
              <div :href="item.url">
                  <h2 class="post-title">            
                      <a :href="item.url" target="_blank" style="font-size: 26px;">{{item.title}}</a>
                  </h2>
                  <div class="post-content-preview">{{item.summary}}</div>
              </div>
              <div class="post-meta">Posted by hubcarl on 17-09-24</div>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div style="text-align:center" v-if="isLoading">
       <img src="../../asset/images/loading.gif">
    </div>
  </layout>
</template>
<style>
  @import "index.css";
</style>
<script type="babel">
  export default {
    components: {

    },
    data(){
      return {
        isFinish: false,
        isLoading : false,
        pageIndex: 1,
        pageSize: 10
      }
    },
    computed: {
      lists(){
        return this.list;
      }
    },
    methods: {
      fetch(){
        this.$request.get(`/list?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=> {
          console.log('res', res);
          if(res.data.list && res.data.list.length){
            this.total = res.data.total;
            this.list = this.list.concat(res.data.list);
          }else{
            this.isFinish = true;
          }
          this.isLoading = false;
        });
      },
      loadPage(){
        if (!this.isFinish && !this.isLoading) {
          this.isLoading = true;
          this.pageIndex++;
          setTimeout(()=>{
            this.fetch();
          }, 1500);
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', ()=>{
        this.loadPage();
      }, false);
    }
  }
</script>

