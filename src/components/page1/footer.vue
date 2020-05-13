<template>
  <footer>
    <div class="layOut">
      <Icons class="icon leftIcon" name="left" />
      <div class="coverBox">
        <Images />
      </div>
      <Icons class="icon rightIcon" name="right" @click="scrollLeft" />
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Axios from "axios";
import Images from "@/components/footer/images.vue";
@Component({
  components: { Images }
})
export default class Footer extends Vue {
  scrollLeft() {
    
  }
}
</script>

<style lang="scss" scoped>
footer {
  height: 24vh;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 -0.25vh 0.25vh 0.25vh rgba(255, 255, 255, 0.2);
  width: 100%;

  &:hover > .layOut > .icons {
    opacity: 1;
  }

  > .layOut {
    position: relative;
    height: 24vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    > .coverBox {
      flex: 1;
      overflow: hidden;
      border: 1px solid red;
    }

    > .icon {
      position: absolute;
      top: 8vh;
      font-size: 6vh;
      color: rgba(255, 255, 255, 0.2);
      transition: all 0.4s;
      cursor: pointer;
      opacity: 0;
      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    > .icon.leftIcon {
      left: -8vh;
    }

    > .icon.rightIcon {
      right: -8vh;
    }
  }
}
</style>