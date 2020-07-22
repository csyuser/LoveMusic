<template>
  <ul>
    <li v-for="item in channels" :key="item.id" ref="li" @click="$emit('click',item.channel_id)">
      <div class="bgmImg" :style="{backgroundImage: 'url('+item.cover_small+')'}"></div>
      <h3>{{item.name}}</h3>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Axios from "axios";

@Component
export default class Images extends Vue {
  channels = []
  created() {
    Axios.get("http://api.jirengu.com/fm/v2/getChannels.php").then(response => {
      // console.log(response)
      this.channels = response.data.channels;
    });
  }

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

