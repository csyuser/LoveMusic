<template>
  <div class="details">
    <span class="tag">{{this.$store.state.tagName}}</span>
    <h1 class="title">{{this.$store.state.title}}</h1>
    <ul class="icons">
      <li>
        <icons name="earphone" class="item"/> 3333
      </li>
      <li>
        <icons name="heart" class="item"/>3333
      </li>
      <li>
        <icons name="like" class="item"/>3333
      </li>
    </ul>
    <div class="are-bar">
      <div class="bar">
        <div class="progressBar" :style="{width:this.$store.state.currentBarWidth}"></div>
      </div>
      <div class="currentTime">{{this.$store.state.currentTime}}</div>
    </div>
    <div class="author">{{this.$store.state.author}}</div>
    <div class="lyric">歌词歌词歌词歌词歌词歌词歌词歌词</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Detail extends Vue {
  }
</script>

<style lang="scss" scoped>
  .details {
    margin-left: 10vh;
    color: #ffffff;
    width: 100vh;

    > .tag {
      font-size: 2vh;
      padding: .4em .8em;
      background: #2e6eec;
    }

    > h1 {
      font-size: 6vh;
      padding-top: 2vh;
    }

    > .icons {
      display: flex;
      font-size: 3vh;
      padding-top: 12vh;
      > li {
        flex: 1;
        > .item {
          margin-right: 1vh;
          color: #ffffff;
        }
      }
    }

    > .are-bar {
      padding-top: 10vh;
      display: flex;
      align-items: center;

      > .bar {
        flex: 1;
        position: relative;
        height: 0.8vh;
        border-radius: 0.2vh;
        background: rgba(255, 255, 255, 0.4);

        > .progressBar {
          position: absolute;
          height: 0.8vh;
          border-radius: 0.2vh;
          background: #ffffff;
        }
      }

      > .currentTime {
        width: 3vh;
        margin: 0 1vh 0 1vh;
        font-size: 2vh;
      }
    }

    > .author {
      margin-top: 3vh;
      font-size: 3vh;
    }

    > .lyric {
      margin-top: 2vh;
      color: rgba(255, 255, 255, 0.4);
    }
  }
</style>