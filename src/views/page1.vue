<template>
  <section class="page-music">
    <Background id="bg" />
    <main class="layOut">
      <Cover />
      <Detail />
    </main>
    <Footer @song="updateCover" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Background from "@/views/background.vue";
import Cover from "@/components/page1/cover.vue";
import Detail from "@/components/page1/detail.vue";
import Footer from "@/components/page1/footer.vue";

@Component({
  components: { Footer, Detail, Cover, Background }
})
export default class Page1 extends Vue {
  parseImg(path: string) {
    return require("../assets/images/" + path + ".jpg");
  }
  updateCover(item: Picture) {
    const themeImg = document.getElementById("themeImg");
    const bg = document.getElementById("bg");
    const tag = document.getElementById("tag");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const lyric = document.getElementById("lyric");

    if (
      themeImg === null ||
      bg === null ||
      tag === null ||
      title === null ||
      author === null ||
      lyric === null 
    )
      return;
    themeImg.style.backgroundImage = "url(" + this.parseImg(item.imgUrl) + ")";
    bg.style.backgroundImage = "url(" + this.parseImg(item.imgUrl) + ")";
    tag.innerHTML = item.name;
    title.innerHTML = item.song[0].title;
    author.innerHTML = item.song[0].artist;
    const audio = new Audio();
    audio.src = require("../assets/music/" + item.song[0].url + ".mp3");
    audio.play();
    console.log(audio.src);
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  > .layOut {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    padding-top: 12vh;
  }
}
</style>