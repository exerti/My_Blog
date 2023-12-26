<template>
    <div class="main common-layout">
        <el-main class="left">
            <!-- 主要的文章列表 -->
            <Articles></Articles>

        </el-main>
        <el-aside class="right">
            <!-- 个人信息card -->
            <el-card :body-style="{ padding: '0px' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px">
                  <span>Yummy hamburger</span>
                  <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button text class="button">Operating</el-button>
                  </div>
                </div>
              </el-card>

            <!-- 网站公告 -->
            <el-card>
              
            </el-card>
        </el-aside>
    </div>
</template>

<script setup lang="ts">
import Articles from '../../components/Articles.vue';
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style scoped>
.main{
    margin-top: 10px;
    width: 85%;
    background-color: antiquewhite;
    display: flex;

    
}
.left {
    width: 80%;
}

.right{
    width: 20%;
}
.time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    width: 200px;
    height: 300px;
    display: block;
  }
</style>