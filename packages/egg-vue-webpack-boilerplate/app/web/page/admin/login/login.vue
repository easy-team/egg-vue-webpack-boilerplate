<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        <img 
          src="../../../asset/images/logo.png" 
          height="100" 
          alt="" >
        <p>easyjs</p>
      </div>
      <div class="login-info">
        <el-input
          v-model="userName"
          placeholder="请输入用户名"
          suffix-icon="fa fa-user"
          style="margin-bottom: 18px"
        />

        <el-input
          v-model="password"
          placeholder="请输入密码"
          suffix-icon="fa fa-keyboard-o"
          type="password"
          style="margin-bottom: 18px"
        />
      </div>
      
      <el-button
        type="primary"
        style="width: 100%;margin-bottom: 18px"
        @click.native="login">登录</el-button>
      <div>
        <el-checkbox 
          v-model="remenber" 
          class="login-remember">记住密码</el-checkbox>
        <a 
          href="javascript:;" 
          style="float: right;color: #3C8DBC;font-size: 14px">注册</a>
      </div>
    </div>
  </div>
</template>

<style>
@import "login.css";
</style>

<script type="text/babel">
import Vue from 'vue';
import {
  Input,
  Button,
  Checkbox
} from 'element-ui';
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Checkbox.name, Checkbox);
export default {
  data:function() {
    return {
      userName: '',
      password: '',
      remenber: true
    };
  },
  methods: {
    login() {
      window.location.replace('/admin');
    }
  }
};
</script>