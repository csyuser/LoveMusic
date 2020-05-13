<template>
  <footer>
    <div class="layOut">
      <Icons class="icon leftIcon" name="left"/>
      <div class="coverBox">
        <ul>
          <li>
            <img src="../../assets/images/classics.jpg" alt="picture">
            <h3>经典</h3>
          </li>
          <li>
            <img src="../../assets/images/class.jpg" alt="picture">
            <h3>校园</h3>
          </li>
          <li>
            <img src="../../assets/images/pure.jpg" alt="picture">
            <h3>小清新</h3>
          </li>
          <li>
            <img src="../../assets/images/travel.jpg" alt="picture">
            <h3>旅游</h3>
          </li>
        </ul>
      </div>
      <Icons class="icon rightIcon" name="right"/>
    </div>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Footer extends Vue {

  }
</script>

<style lang="scss" scoped>
  footer {
    height: 24vh;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 -0.25vh 0.25vh 0.25vh rgba(255, 255, 255, 0.2);
    width: 100%;

    &:hover > .layOut> .icons {
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
        > ul {
          display: flex;
          > li {
            width: 20vh;
            height: 20vh;
            text-align: center;
            cursor: pointer;
            flex: 1;

            > img {
              width: 20vh;
              height: 16vh;
              transition: all 0.4s;
              &:hover{
                box-shadow: 0 0 .25vh .25vh rgba(255,255,255,0.3);
              }
            }
            .pic{
              border: 1px solid red;
              background-size: cover;
              background-position: center center;
              width: 20vh;
              height: 16vh;
            }

            > h3 {
              color: rgba(255,255,255,0.8);
              margin-top: 1vh;
              font-size: 2vh;
            }
          }
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
        left: -8vh
      }

      > .icon.rightIcon {
        right: -8vh;
      }
    }
  }

</style>