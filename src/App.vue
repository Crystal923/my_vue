<template>
  <div id="app">
    <div class="topbar">
      <span class="topbar_title">我的vue项目</span>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: $route.path }">{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="sidebar">
      <el-menu :default-active="$route.path" class="el-menu-demo" theme="dark" router>
        <el-submenu index="/editor">
          <template slot="title">富文本编辑器</template>
          <el-menu-item index="/editor/vue-editor">vue-editor</el-menu-item>
          <el-menu-item index="/editor/ckeditor">CkEditor</el-menu-item>
        </el-submenu>
        <el-menu-item index="/upload">文件上传</el-menu-item>
        <el-menu-item index="/https">网络请求</el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import ElMenuItem from '../node_modules/element-ui/packages/menu/src/menu-item'
  import ElSubmenu from '../node_modules/element-ui/packages/menu/src/submenu'
  export default {
    components: {ElSubmenu, ElMenuItem}
  }
</script>

<style>
  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .topbar {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #324157;
    line-height: 60px;
    padding: 0 24px;
    z-index: 10;
  }

  .topbar_title {
    color: white;
    font-size: 18px;
  }

  .breadcrumb {
    color: white !important;
    font-size: 16px;
    position: relative;
    display: inline-block;
    margin-left: 80px;
  }

  .sidebar {
    width: 180px;
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 10;
  }

  .main {
    margin-left: 180px;
    margin-top: 60px;
    padding: 24px;
    z-index: 0;
  }


</style>
