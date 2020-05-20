<template>
  <section class="page-music">
    <Background id="bg" />
    <main class="layOut">
      <Cover
        @updateNext="updateNext"
        @updatePlay="updatePlay"
        @updateLast="updateLast"
        :btnPlay="btnPlayName"
      />
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
  item: Picture = { id: 0, name: "", imgUrl: "", song: [] };
  btnPlayName: string = "play";
  number: number = 0;
  audio = new Audio()

  updateCover(item: Picture) {
    this.number = 0;
    this.$store.commit("updateCover", { item: item, number: this.number });
    this.item = item;
    this.btnPlayName = "pause";
  }
  updateNext() {
    this.btnPlayName = "pause";
    if (this.item.song.length-1 > this.number) {
      this.number += 1;
      this.$store.commit("updateCover", {item: this.item,number: this.number });
    }else{
      window.alert('这是最后一首啦')
    }
  }
  updateLast() {
    this.btnPlayName = "pause";
    if(this.number>0){
    this.number -= 1;
    this.$store.commit("updateCover", { item: this.item, number: this.number });
    }else{
      window.alert('这是第一首哦')
    }
    
  }
  updatePlay() {
    if (this.btnPlayName === "pause") {
      this.btnPlayName = "play";
      this.$store.commit("switchPlay", "play");
    } else {
      this.btnPlayName = "pause";
      this.$store.commit("switchPlay", "pause");
    }
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