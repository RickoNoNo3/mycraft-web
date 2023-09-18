<script setup lang="ts">

import MyHeader from './MyHeader.vue';
import {ref} from 'vue';

const props = defineProps<{
  currentPage: string,
  bg?: string
  bgType?: 'parallax' | 'fixed'
  noLogo?: boolean
}>();

const showImg = ref(false);
const showContent = ref(false);

const finalBgType = props.bgType ? props.bgType : 'fixed'

function onImgLoad() {
  showImg.value = true;
  setTimeout(() => {
    showContent.value = true;
  }, 100);
}

</script>

<template>
  <div class="fixed-bg" :class="finalBgType !== 'parallax' && showImg ? 'opacity-100' : 'opacity-0'">
    <img class="fixed-bg-img" :src="props.bg" @load="onImgLoad"/>
  </div>

  <template v-if="finalBgType === 'parallax'">
    <v-parallax :src="props.bg" scale="0.3" style="min-height: 100vh">
      <MyHeader :current-page="props.currentPage" :no-logo="noLogo"/>
      <slot/>
    </v-parallax>
  </template>

  <template v-if="finalBgType === 'fixed'">
    <MyHeader :current-page="props.currentPage" :no-logo="noLogo"/>
    <slot/>
  </template>
</template>

<style scoped lang="scss">
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  z-index: -999;
  display: flex;
  place-items: center;
  transition: opacity 300ms;

  & > .fixed-bg-img {
    flex: none;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
}
</style>
