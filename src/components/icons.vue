<template>
  <svg class="icons" @click="$emit('click',$event)">
    <use v-bind:xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

  @Component
  export default class Icons extends Vue {
    @Prop(String) name?: string;
  }
</script>

<style lang="scss" scoped>
  .icons {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: rgba(255, 255, 255, 0.5);
  }
</style>