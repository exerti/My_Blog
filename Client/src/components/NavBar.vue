<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo menu"
      mode="horizontal"
      @select="handleSelect"
      
    >
      <el-menu-item index="0">
         <span>Mortal</span>
      </el-menu-item>

      <div class="flex-grow" />
      <el-menu-item index="1">
        <Search></Search>
      </el-menu-item>
      <el-menu-item index="2">分类</el-menu-item>
      <el-menu-item index="3">留言板</el-menu-item>
      <el-menu-item index="4">时间轴</el-menu-item>
      <el-menu-item index="5">其他的</el-menu-item>

      
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import Search from './Search.vue';
  const activeIndex = ref('1')


  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  .menu{
    height: 48px;
  }
  </style>
  