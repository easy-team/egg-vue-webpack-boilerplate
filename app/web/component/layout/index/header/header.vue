<template>
<div>
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header page-scroll">
                <button type="button" @click="menuBtn" class="navbar-toggle" :class="{ 'collapsed': collapsed }" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">IBlog</a>
            </div>
            <div class="collapse navbar-collapse" :class="{ 'collapse in': collapsed }" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/">{{$t('menu.home')}}</a>
                    </li>
                    <li>
                        <a href="/category">{{$t('menu.category')}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="intro-header" style="background-color:#3c763d;">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <div>
                            <img src="../../../../asset/images/loading.gif" width="80px" height="80px" style="display: inline">
                        </div>
                        <h1>博客</h1>
                        <hr class="large">
                        <span class="subheading">IBlog</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>
</template>
<script type="babel">
import "./header.css";
export default {
  components: {},
  data() {
    return {
      collapsed: false
    };
  },
  computed: {},
  methods: {
    menuBtn() {
      this.collapsed = !this.collapsed;
    }
  },
  mounted() {}
};
</script>
