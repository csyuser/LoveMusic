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
import Axios from 'axios'

@Component({
  components: { Footer, Detail, Cover, Background }
})
export default class Page1 extends Vue {
  channel_id: string = '';
  btnPlayName: string = "play";
  number: number = 0;
  audio = new Audio();

  // created() {
  //   Axios.get('http://api.jirengu.com/fm/v2/getSong.php',{params:this.channel_id}).then(response=>{
  //     console.log(response)
  //   })
  // }
  updateCover(channel_id: string) {
    this.$store.commit("updateCover", channel_id)
    this.channel_id = channel_id;
    this.btnPlayName = 'pause'
  }
  updateNext() {
    this.btnPlayName = 'pause'
    this.$store.commit("updateCover", this.channel_id)
  }
  updateLast() {
    this.btnPlayName = 'pause'
    this.$store.commit("updateCover", this.channel_id)
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