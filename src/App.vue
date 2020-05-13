<template>
  <div id="app">
    <Page1/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator';
  import Page1 from '@/views/page1.vue';

  @Component({
    components: {Page1}
  })
  export default class App extends Vue{

  }
</script>

<style lang="scss">
  @import "~@/assets/style/reset.scss";

</style>
