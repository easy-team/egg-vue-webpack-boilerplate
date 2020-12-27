<template>
  <layout 
    description="vue server side render" 
    keywords="egg, vue, webpack, server side render">
    <div class="container">
      <h2>{{ message }}</h2>
      <el-button type="primary">element-ui</el-button>
    </div>
  </layout>
</template>
<style>
  @import 'category.css';
</style>
<script type='babel'>
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
Vue.use(Button);
export default {
  components: {},
  computed: {},
  methods: {},
}
</script>

