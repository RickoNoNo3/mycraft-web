<script setup lang="ts">
import {useRouter} from 'vue-router';
import {onMounted, ref} from 'vue';
import {ItemBoxType, ItemInfoType} from '../../type/BookTypes';
import MyPanel from '../../components/MyPanel.vue';
import {GetItem} from './web';
import ItemBox from './ItemBox.vue';

const router = useRouter();

const props = defineProps<{
  itemId: string
}>();

const itemId = parseInt(props.itemId);

const item = ref<ItemInfoType | null>(null);
const loaded = ref(false);

onMounted(() => {
  GetItem(itemId).then(data => {
    item.value = data;
    loaded.value = true;
  });
});

</script>
<template>
  <v-container v-if="loaded && item">
    <div class="w-full lg:flex lg:flex-row-reverse">
      <div class="lg:ml-6" style="flex: 1; min-width: 300px">
        <MyPanel class="mb-6 items-center item-view">
          <div class="w-full left lg:hidden">
            <button @click="router.back" class="hover:underline">&lt;&lt;&emsp;返回</button>
          </div>
          <ItemBox :item="item" class="item-box mt-4"/>
          <div class="item-name">{{ item?.name }}</div>
          <div class="item-description">{{ item?.describe }}</div>
        </MyPanel>
      </div>
      <div style="flex: 3; min-width: 300px">
        <MyPanel class="flex-col mb-6 items-start" style="min-height: calc(200px + 20vh);">
          <button @click="router.back" class="hidden lg:block hover:underline">&lt;&lt;&emsp;返回</button>
          <h1>{{ item?.name }}</h1>
          <div class="typo-block" v-html="item?.richtxt"></div>
        </MyPanel>
      </div>
    </div>
  </v-container>
</template>
<style scoped lang="scss">
.item-view {
  .item-box {
    width: 220px;
    height: 220px;
  }

  .item-name {
    text-align: center;
    margin: 30px auto 10px;
    font-size: 24px;
    text-shadow: 3px 3px 3px #3333;
  }

  .item-description {
    text-align: center;
    margin: 10px auto 10px;
    font-size: 18px;
    text-shadow: 3px 3px 3px #3333;
  }
}

h1 {
  margin: 20px 0 30px;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 3px 3px 3px #3333;
}

</style>
