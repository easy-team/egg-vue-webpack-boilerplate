<template>
  <div style="height:100%">
     <header class="header">
      <div class="logo">
          <span class="big" v-if="this.collapse">{{ site.name }}</span>
          <span class="min" v-else-if="!this.collapse">{{ site.description }}</span>
        </div>
        <span class="header-btn" @click="sidebarToggle"><i class="el-icon-menu"></i></span>
       
        <div class="right">
          <span class="header-btn">
            <a v-bind:href="$t('lang.href')"><i class="el-icon-message"></i></a>
          </span>
          <el-dropdown>
              <span class="header-btn">
                  {{$t('lang.text')}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="switchLang('en')">英文</el-dropdown-item>
              <el-dropdown-item @click.native="switchLang('cn')">中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="header-btn">
              <el-badge :value="2" class="badge">
                  <i class="el-icon-message"></i>
              </el-badge>
          </span>
          <span class="header-btn">
            <i class="el-icon-bell"></i>
          </span>
          <el-dropdown>
                      <span class="header-btn">
                          Admin<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
    </header>
    <LeftMenu :collapse="collapse"></LeftMenu>
  </div>
</template>
<style>
.logo .big {
  width: 64px;
}
.logo .min {
  display: block;
  width: 64px;
}
.app-body {
  margin-left: 80px;
}
</style>
<script type="babel">
import "./header.css";
import LeftMenu from "../menu/index.vue";
export default {
  components: {
    LeftMenu
  },
  data() {
    return {
      collapse: false,
      site: {
        name: "Admin",
        description: "Admin"
      }
    };
  },
  computed: {},
  methods: {
    sidebarToggle(e) {
      e.preventDefault();
      if (this.collapse) {
        document.body.classList.remove("sidebar-hidden");
        this.collapse = false;
      } else {
        document.body.classList.add("sidebar-hidden");
        this.collapse = true;
      }
    },
    logout() {
      window.location.replace("/login");
    },
    switchLang(lang) {
      window.location.href = `/admin?locale=${lang}`;
    }
  },
  mounted: function() {
    if (!this.collapse) {
      document.body.classList.remove("sidebar-hidden");
    } else {
      document.body.classList.add("sidebar-hidden");
    }
  }
};
</script>
