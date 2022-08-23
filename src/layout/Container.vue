<script lang='ts' setup>
import { ref } from 'vue'
import NavHeader from './NavHeader.vue'
import NavSide from './NavSide.vue'

const isCollapse = ref(false)
</script>

<template>
  <el-container>
    <el-aside>
      <nav-side :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main pb0>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid rgba(107,114,128,0.2);
}
</style>
