<template>
  <div class="background"></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Background extends Vue {

  }
</script>

<style lang="scss" scoped>
  .background {
    position: absolute;
    background: url("../assets/images/class.jpg") center center no-repeat;
    background-size: cover;
    z-index: -1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    filter: blur(3px);

    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>