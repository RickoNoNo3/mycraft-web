<script setup lang="ts">

import {ItemBoxType} from '../../type/BookTypes';

const props = defineProps<{
  item: ItemBoxType
}>();

</script>

<template>
  <div class="item-box">
    <v-img class="item-image" :src="item.image"/>
  </div>
</template>

<style scoped lang="scss">
.item-box {
  flex: none;
  min-width: 100px;
  min-height: 100px;
  background: #ADD597;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #3333;


  .item-image {
    max-width: 80%;
    max-height: 80%;
  }
}
</style>
