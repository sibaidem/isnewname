<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2 class="log">景区零售系统管理平台</h2>
        <el-link :underline="false">基础管理</el-link>
        <el-link :underline="false">商品管理</el-link>
        <el-link :underline="false">营销管理</el-link>

        <div class="demo-type">
          <div>
            <el-avatar> user </el-avatar>
          </div>
          <span>欢迎，管理员</span>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-col>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
              default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose" router="">
              <el-menu-item index="/index/merchant">
                <span>商户管理</span>
              </el-menu-item>
              <el-menu-item index="/index/region">
                <span>区域管理</span>
              </el-menu-item>
              <el-menu-item index="/index/factoryWarehouse">
                <span>厂库管理</span>
              </el-menu-item>

              <el-menu-item index="/index/store">
                <span>门店管理</span>
              </el-menu-item>
              <el-menu-item index="/index/staff">
                <span>员工管理</span>
              </el-menu-item>
              <el-menu-item index="/index/supplier">
                <span>供应商管理</span>
              </el-menu-item>

              <el-menu-item index="/index/customers">
                <span>客户分类</span>
              </el-menu-item>
              <el-menu-item index="/index/customer">
                <span>客户管理</span>
              </el-menu-item>
              <el-menu-item index="/index/storeTerminal">
                <span>门店终端管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>

        <el-main>
          <el-breadcrumb separator="/">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item> -->
            <el-breadcrumb-item><a href="/index/store">门店管理</a></el-breadcrumb-item>
          </el-breadcrumb>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-header {
  display: flex;
  height: 60px;
  background: skyblue;
}
.demo-type {
  display: flex;
  float: right;
  right: 0;
}

.log {
  text-align: center;
  width: 300px;
  line-height: 60px;
  color: white;
}

.el-link {
  margin-right: 8px;
  color: white;
}

.el-aside {
  height: calc(100vh - 60px);
  padding: 0;
  margin: 0;
}

.el-menu {
  height: calc(100vh - 60px);
}

.el-breadcrumb {
  height: 60px;
  background: #ddd;
}

.el-main {
  padding: 0;
  margin: 0;
}


</style>