<template>
  <ul>
    <li v-for="item in channels" :key="item.name" ref="li">
      <div class="bgmImg" :style="{backgroundImage: 'url('+parseImg(item.url) +')'}"></div>
      <h3>{{item.name}}</h3>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

type Picture = {
  name: string;
  url: string;
};

@Component
export default class Images extends Vue {
  channels: Picture[] = [
    { name: "经典", url: "classics" },
    { name: "校园", url: "class" },
    { name: "小清新", url: "pure" },
    { name: "旅游", url: "travel" },
    { name: "粤语", url: "Cantonese" },
    { name: "林俊杰", url: "JJ" },
    { name: "英文歌", url: "English" },
    { name: "动漫", url: "Anime" },
    { name: "伤感", url: "sadness" },
    { name: "经典电影", url: "movie" },
    { name: "爱情电影", url: "loveMovie" },
    { name: "超好听的翻唱", url: "Cover" },
    { name: "咖啡厅背景音乐", url: "bgm" },
    { name: "民谣", url: "folkRhyme" }
  ];

  public parseImg(path: string) {
    return require("../../assets/images/" + path + ".jpg");
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  transition: all 0.4s;
  > li {
    width: 20vh;
    height: 20vh;
    text-align: center;
    cursor: pointer;
    margin: 2vh 2vh 0 0;
    > .bgmImg {
      width: 20vh;
      height: 16vh;
      background-size: cover;
      background-position: center center;
      transition: all 0.4s;
      &:hover {
        box-shadow: 0 0 0.25vh 0.25vh rgba(255, 255, 255, 0.3);
      }
    }
    > h3 {
      color: rgba(255, 255, 255, 0.8);
      margin-top: 1vh;
      font-size: 2vh;
    }
  }
}
</style>