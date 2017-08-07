<template>
  <layout>
    <div class="message-one">{{message}}</div>
    <div class="message-two">{{message}}</div>
  </layout>
</template>
<style lang="scss">
@import "./sass.scss";
$red: red;
$side : left;
.message-two {
    font-size: 24px;
    text-align: center;
    border: 1px solid #cecece;
    border-#{$side}-radius: 5px;
    color: $red;
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

