<template>
  <layout title="egg-view-vue#unittest" description="vue server side render" keywords="vue server side render">
       <div class="title">{{message}}</div>
      <ul><li key="id" v-for="item in model">{{item.name}}</li></ul>
  </layout>
</template>
<style lang="scss">
  @import "test.scss";
</style>
<script type="text/babel">

  export default {
    components: {

    },
    computed: {
      model(){
        return [
          {
            id: 1,
            first: true,
            name: 'sky'
          },
          {
            id: 2,
            first: false,
            name: 'carl'
          }
        ]
      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

