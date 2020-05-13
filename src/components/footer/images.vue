<template>
  <ul>
    <li v-for="item in channels" :key="item.name">
      <img :src="require('../../assets/images/'+item.url+'.jpg')" alt="picture">
      <h3>{{item.name}}</h3>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  type Picture = {
    name: string
    url: string
  }

  @Component
  export default class Images extends Vue {
    channels: Picture[] = [
      {name: '经典', url: 'classics'},
      {name: '校园', url: 'class'},
      {name: '小清新', url: 'pure'},
      {name: '旅游', url: 'travel'},
      {name: '粤语', url: 'Cantonese'},
      {name: '林俊杰', url: 'JJ'},
      {name: '英文歌', url: 'English'},
      {name: '动漫', url: 'Anime'},
      {name: '伤感', url: 'sadness'},
      {name: '经典电影', url: 'movie'},
      {name: '爱情电影', url: 'Love movie'},
      {name: '送给对象的情歌', url: 'for you'},
      {name: '超好听的翻唱', url: 'Cover'},
      {name: '咖啡厅背景音乐', url: 'bgm'},
      {name: '民谣', url: 'folk rhyme'},
    ];
  }

</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    > li {
      width: 20vh;
      height: 20vh;
      text-align: center;
      cursor: pointer;
      margin: 2vh 2vh 0 0;
    //   flex: 1;

      > img {
        width: 20vh;
        height: 16vh;
        transition: all 0.4s;

        &:hover {
          box-shadow: 0 0 .25vh .25vh rgba(255, 255, 255, 0.3);
        }
      }

      .pic {
        border: 1px solid red;
        background-size: cover;
        background-position: center center;
        width: 20vh;
        height: 16vh;
      }

      > h3 {
        color: rgba(255, 255, 255, 0.8);
        margin-top: 1vh;
        font-size: 2vh;
      }
    }
  }
</style>