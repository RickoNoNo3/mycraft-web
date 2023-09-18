<script setup lang="ts">
import MyPanel from '../../components/MyPanel.vue';
import ItemBox from './ItemBox.vue';
import {ItemBoxType} from '../../type/BookTypes';

const props = defineProps<{
  item: ItemBoxType
  size?: 'sm' | 'lg'
  click?: () => void
}>();

const size = props.size ?? 'sm';

</script>

<template>
  <div @click="click">
    <MyPanel
        class="item-panel flex-col w-max"
        :class="`size-${size}`"
        hoverable
    >
      <ItemBox class="item-box" :item="item"/>
      <div class="item-name">{{ item.name }}</div>
    </MyPanel>
  </div>
</template>

<style scoped lang="scss">
.item-panel {
  user-select: none;
  cursor: pointer;

  .item-box {
    width: 150px;
    height: 150px;
  }

  .item-name {
    text-align: center;
    margin: 30px auto 10px;
    font-size: 18px;
    text-shadow: 3px 3px 3px #3333;
  }

  &.size-lg {
    padding: 30px;

    .item-box {
      width: 200px;
      height: 200px;
    }

    .item-name {
      margin: 40px auto 30px;
      font-size: 30px;
    }
  }
}
</style>
