<template>
<Layout>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        <img src="../../../asset/images/logo.png" height="100" alt="">
        <p>IBlog</p>
      </div>
      <el-input
          placeholder="请输入用户名"
          suffix-icon="fa fa-user"
          v-model="userNmae"
          style="margin-bottom: 18px"
      >
      </el-input>

      <el-input
          placeholder="请输入密码"
          suffix-icon="fa fa-keyboard-o"
          v-model="password"
          type="password"
          style="margin-bottom: 18px"
      >
      </el-input>

      <el-button
          type="primary"
          style="width: 100%;margin-bottom: 18px"
          @click.native="login"
      >登录
      </el-button>
      <div>
        <el-checkbox v-model="remenber">记住密码</el-checkbox>
        <a href="javascript:;" style="float: right;color: #3C8DBC;font-size: 14px">注册</a>
      </div>
    </div>
  </div>
</Layout>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        userNmae: '',
        password: '',
        remenber: true
      }
    },
    methods: {
      login() {
        setTimeout(() => {
          this.$notify({
            title: '登录成功',
            message: '欢迎 IBlog 学习系统',
            type: 'success'
          });
          window.location.replace('/admin');
        }, 1000);
      }
    }
  }
</script>

<style lang="less">
  @import "login.less";
</style>