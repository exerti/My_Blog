<template>
    <div id="article-list">
        <li v-for="(item,index) in ArticleList" :key="index" class="article-item">
          <section>
             <h2><a href="javascript:;">{{item.title}}</a>   
            </h2>
            <span class="time">{{item.time}}</span>
          </section>     
             <p> <span>{{item.content}}</span></p>
        </li>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let  ArticleList = ref([
    {
        title: '标题1',
        content: '内容1',
        time: '2023-03-20'
    },
    {
        title: '标题2',
        content: '内容2',
        time: '2023-03-20'
    },
    {
        title: '标题3',
        content: '内容3',
        time: '2023-03-20'
    },
    {
        title: '标题4',
        content: '内容4',
        time: '2023-03-20'
    }
])

</script>

<style scoped>

#article-list {
   
  }
  
  .article-item {
    margin-top: 8px;
    width: 85%;
    height: 71px;
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .article-item h2 {

    color: #333;
  }
  
  .article-item p {
    color: #555;
  }

  .time{
    right:0;
    font-size: 15px ;
  }
</style>