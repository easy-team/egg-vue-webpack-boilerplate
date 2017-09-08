<template>
  <layout>
    <img src="../../../asset/images/logo.png"/>
    <div> {{message}} </div>
    <div :class="$style.message"> {{message}} </div>
  </layout>
</template>
<style module>
.message{
  text-align: center;
  composes: blue from "./module.css";
  composes: size from "./module.css";
  composes: bg from "sass-loader!./module.scss";
}

</style>
<script type="text/babel">
  export default {
    components: {},
    computed: {},
    methods: {},
    mounted() {

    }
  }
</script>

