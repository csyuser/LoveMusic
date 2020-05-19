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
  updateCover(item: Picture) {
    this.$store.commit("updateCover", item);
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