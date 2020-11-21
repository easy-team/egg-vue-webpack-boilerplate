<template>
  <div>
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header page-scroll">
          <button 
            :class="{ 'collapsed': collapsed }" 
            type="button" 
            class="navbar-toggle" 
            data-toggle="collapse" 
            data-target="#bs-example-navbar-collapse-1" 
            @click="menuBtn">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"/>
            <span class="icon-bar"/>
            <span class="icon-bar"/>
          </button>
          <a 
            class="navbar-brand" 
            href="/">easyjs</a>
        </div>
        <div 
          id="bs-example-navbar-collapse-1" 
          :class="{ 'collapse in': collapsed }" 
          class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="/">{{ $t('menu.home') }}</a>
            </li>
            <li>
              <a href="/blog/category">{{ $t('menu.category') }}</a>
            </li>
            <li>
              <a href="/admin">{{ $t('menu.admin') }}</a>
            </li>
            <li>
              <a href="/spa">{{ '更多' }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header 
      class="intro-header" 
      style="background-color:#3c763d;">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
            <div class="site-heading">
              <!-- <div>
                            <img src="../../../../asset/images/logo.png" style="display: inline">
                        </div> -->
              <h1>Egg Vue</h1>
              <hr class="large">
              <span class="subheading">Egg + Vue 工程化方案</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script type="babel">
import './header.css';
export default {
  components: {},
  data() {
    return {
      collapsed: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    menuBtn() {
      this.collapsed = !this.collapsed;
    }
  },
};
</script>
