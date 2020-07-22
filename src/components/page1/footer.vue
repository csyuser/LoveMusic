<template>
  <footer ref="footer" id="footer">
    <div class="layOut">
      <Icons class="icon leftIcon" name="left" @click="scroll('left')" />
      <div class="coverBox" ref="box">
        <Images :style="{marginLeft:leftWidth+'px'}" id="ul" class="box-img" @click="getSong" />
        <!-- <Images :style="{marginLeft:leftWidth+'px',marginRight:rightWidth+'px'}" ref="ul"/> -->
      </div>
      <Icons class="icon rightIcon" name="right" @click="scroll('right')" />
    </div>
  </footer>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Images from "@/components/footer/images.vue";
@Component({
  components: { Images }
})
export default class Footer extends Vue {
  leftWidth = 0;
  isLeft= "true";
  isRight= "false";

  scroll(direction: string) {
    this.$nextTick(() => {
      const ele = document.getElementById("ul") as HTMLElement;
      const ulWidth = ele.offsetWidth;
      const cliWidth = ((this.$refs.footer as HTMLElement).offsetHeight / 0.24) * 0.22;
      const coverWidth = (this.$refs.box as HTMLElement).offsetWidth;
      const liCount = Math.floor(coverWidth / cliWidth);
      const scrollWidth = cliWidth * liCount;
      const left = parseFloat(window.getComputedStyle(ele).marginLeft);
      if (direction === "right") {
        if (this.isLeft === "true") {
          this.leftWidth += -scrollWidth;
          this.isRight = "true";
          if ((left - scrollWidth - coverWidth) * -1 >= ulWidth) {
            this.isLeft = "false";
          }
        }
      } else if (direction === "left") {
        if (this.isRight === "true") {
          this.leftWidth += scrollWidth;
          this.isLeft = "true";
          if (left + scrollWidth >= 0) {
            this.isRight = "false";
          }
        }
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/camelcase
  getSong(channel_id: string) {
    this.$emit("song", channel_id);
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
      // flex: 1;
      overflow: hidden;
      position: relative;
      height: 100%;
      width: 100%;

      > .box-img {
        position: absolute;
        left: 0;
        top: 0;
      }
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