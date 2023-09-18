<script setup lang="ts">
import {Pages} from './HeaderPages';
import {ref} from 'vue';

const props = defineProps<{
  currentPage: string
  noLogo?: boolean
}>();

const page = Pages[props.currentPage];

let loaded = ref(false);

setTimeout(() => loaded.value = true, 100);

</script>

<template>
  <nav class="nav">
    <img v-if="!noLogo" class="flex-0" src="/logo-text.png">
    <div class="flex-1"/>
    <div class="nav-page !hidden lg:!flex" v-for="(p, id) in Pages" :key="id" :class="loaded && id === currentPage ? ' active' : ''">
      <a v-if="p.href && p.target !== 'router'" :target="'_' + p.target" :href="p.href">{{ p.name }}</a>
      <router-link v-if="p.href && p.target === 'router'" :to="p.href">{{ p.name }}</router-link>
      <div class="cursor-pointer" v-if="!p.href" @click="p.onClick">{{ p.name }}</div>
    </div>
    <div class="nav-page nav-page-list-icon !block lg:!hidden">
      <v-icon icon="mdi-menu"/>
    </div>
  </nav>
  <div class="nav-shim"></div>
</template>

<style scoped lang="scss">
nav + .nav-shim {
  display: block;
  height: 180px;

  @media (max-width: 640px) {
    height: 100px;
  }
}

nav.nav {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 calc(20px + 2vw);
  z-index: 10;

  @media (max-width: 640px) {
    height: 100px;
  }

  & > img {
    width: 40vw;
    min-width: 200px;
    max-width: 500px;
  }

  & > .nav-page {
    display: flex;
    place-items: center;
    min-width: 80px;
    padding: 20px 15px;
    margin: 0 10px;
    font-size: 28px;
    text-shadow: 2px 2px 3px #333;
    border-top: 5px solid transparent;
    transition: border-width 200ms;

    &.active {
      border-top-width: 0;
      border-bottom: 3px solid white;
    }

    & > * {
      color: #D9D9D9;
      transition: color 200ms;
    }

    &:hover > *,
    &:focus > *,
    &:active > *,
    &.active > * {
      color: white;
    }

    &.nav-page-list-icon {
      cursor: pointer;
      margin-right: -10px;
    }
  }
}

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

  & > img {
    flex: none;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
