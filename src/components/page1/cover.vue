<template>
  <div class="cover">
    <figure id="themeImg"></figure>
    <div class="icons">
      <icons name="last" class="item" />
      <icons :name="playPause" class="item" ref="btnPlay" @click="updatePlay" />
      <icons name="next" class="item" />
      <icons name="heart" class="item" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Cover extends Vue {
  playPause: string = "pause";

  updatePlay() {
    const auduio = new Audio()
    if (this.playPause === "pause") {
      this.playPause = "play";
      audio.
    } else {
      this.playPause = "pause";
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  display: flex;
  flex-direction: column;
  > figure {
    background: url("../../assets/images/class.jpg") center center no-repeat;
    background-size: cover;
    width: 46vh;
    height: 46vh;
  }
  > .icons {
    display: flex;
    padding-top: 4vh;

    > .item {
      flex: 1;
      font-size: 5vh;
      transition: color 0.4s;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>