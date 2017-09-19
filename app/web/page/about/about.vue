<template>
  <layout>
    <img src="../../asset/images/logo.png"/>
    <div> {{message}} </div>
    <div class="fontawesome"> {{message}} </div>
    <img src="../../asset/images/egg-vue-webpack-dev.png"/>
  </layout>
</template>
<style>
@font-face {
 font-family: "fontawesome";
 src: url("./font/fontawesome-webfont.ttf");
}
.fontawesome
{
  font-family:fontawesome;
}
@import "about.css";

</style>
<script type="text/babel">
  import { Toast } from 'mint-ui';
  import 'mint-ui/lib/style.css';
  export default {
    components: {},
    computed: {},
    methods: {},
    mounted() {
      Toast({
        message: 'Upload Complete',
        position: 'bottom',
        duration: 5000
      });
    }
  }
</script>

