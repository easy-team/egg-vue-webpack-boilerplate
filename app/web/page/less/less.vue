<template>
  <layout>
    <div class="message-one"><div>{{message}}</div></div>
    <div class="message"><div>{{message}}</div></div>
  </layout>
</template>
<style lang="less" rel="stylesheet/less">
@import "less.less";
@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow:         @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}

.message {
  text-align: center;
  font-size: 36px;
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}
</style>
<script type="text/babel">

  export default {
    components: {

    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }
</script>

