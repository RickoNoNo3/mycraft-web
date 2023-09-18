<script setup lang="ts">

import {ItemBoxType} from '../../type/BookTypes';
import {nextTick, onMounted, ref, watch} from 'vue';
import MyPanel from '../../components/MyPanel.vue';
import {useRouter} from 'vue-router';
import ItemPanel from './ItemPanel.vue';
import {FindItems, GetCategoryById, ListSubCategoriesByCategoryId} from './web';

const router = useRouter();

const props = defineProps<{
  categoryId: string
}>();

const categoryId = parseInt(props.categoryId);

const category = ref<ItemBoxType>();
const subCategories = ref<ItemBoxType[]>([]);
const currentSubCategoryId = ref(0);
const items = ref([] as ItemBoxType[]);

const loaded = ref(false);

onMounted(() => {
  GetCategoryById(categoryId).then(data => {
    category.value = data;
    ListSubCategoriesByCategoryId(categoryId).then(data2 => {
      if (data2 && data2.length) {
        subCategories.value = data2;
        currentSubCategoryId.value = data2[0].id;
        FindItems(data2[0].id).then(data3 => {
          items.value = data3;
          nextTick();
          loaded.value = true;
        });
      }
    });
  }).catch(ignored => {});
});

function setCurrentSubCategory(id: any) {
  currentSubCategoryId.value = id;
  nextTick();
  FindItems(id).then(data3 => {
    items.value = data3;
  }).finally(() => {
    setTimeout(() => {
      scrollTo({top: window.innerWidth <= 640 ? 100 : 180, behavior: 'smooth'});
    });
  });
}

function handleSearch(e) {
  FindItems(currentSubCategoryId.value, e?.target?.value || undefined).then(data => {
    items.value = data;
  });
}

function handleSearchInput(e) {
  // 仅在输入框为空时实时监听输入搜索（即显示全部），否则需要按回车搜索
  if (e?.target?.value === '') {
    FindItems(currentSubCategoryId.value, e?.target?.value || undefined).then(data => {
      items.value = data;
    });
  }
}

</script>

<template>
  <div>
    <div id="categoryPageLg" class="hidden lg:block">
      <table class="w-full">
        <tbody>
          <tr style="height: 0">
            <td rowspan="2" width="250">
              <MyPanel class="flex-col items-start" style="min-height: calc(200px + 20vh); position: sticky; top: 20px">
                <button @click="router.back" class="hover:underline">&lt;&lt;&emsp;返回</button>
                <h2 v-if="loaded" class="text-3xl font-bold mt-5 mb-4">{{ category?.name }}</h2>
                <template v-if="loaded" v-for="(subCategory, idx) in subCategories" :key="subCategory.id">
                  <div class="subcategory-list-item" :class="{active: currentSubCategoryId == idx}" @click="() => setCurrentSubCategory(idx)">
                    {{ subCategory.name }}
                  </div>
                </template>
              </MyPanel>
            </td>
            <td style="/*position: sticky; top: 0; z-index: 10*/">
              <MyPanel>
                <div v-if="loaded" class="flex items-center justify-center">
                  <div class="flex-1">
                    {{ category?.name }}
                    <template v-if="subCategories && subCategories.length">&emsp;/&emsp;{{ subCategories[currentSubCategoryId || 0].name }}</template>
                  </div>
                  <div id="searchInput" class="flex-none">
                    <input placeholder="回车键搜索" @input="handleSearchInput" @change="handleSearch"/>
                  </div>
                </div>
              </MyPanel>
            </td>
          </tr>
          <tr>
            <td>
              <div class="items-grid-box" style="min-height: 50vh">
                <template v-if="loaded" v-for="(item, idx) in items" :key="item.id">
                  <router-link :to="`/book/item/${item.id}`">
                    <ItemPanel :item="item"/>
                  </router-link>
                </template>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="loaded" id="categoryPageSm" class="block lg:hidden">
      <v-container>
        <MyPanel class="flex-col items-start" style="position: sticky; top: 20px; z-index: 10; margin: 0 20px 30px">
          <div class="flex flex-row items-end justify-between mb-4 w-full">
            <button @click="router.back" class="hover:underline">&lt;&lt;&emsp;返回</button>
            <div>
              <template v-if="subCategories && subCategories.length">{{ subCategories[currentSubCategoryId || 0].name }}&emsp;/&emsp;</template>
              <h2 class="text-3xl font-bold inline-block">{{ category?.name }}</h2>
            </div>
          </div>
          <div class="w-full overflow-auto" style="word-break: keep-all; white-space: nowrap">
            <template v-for="(subCategory, idx) in subCategories" :key="subCategory.id">
              <div class="subcategory-list-item" :class="{active: currentSubCategoryId == idx}" @click="() => setCurrentSubCategory(idx)">
                {{ subCategory.name }}
              </div>
            </template>
          </div>
        </MyPanel>
        <div class="items-grid-box items-grid-box-sm">
          <template v-for="(item, idx) in items">
            <ItemPanel size="lg" :item="item"/>
          </template>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
#categoryPageLg {
  // 默认v-container不太匹配，所以手动
  margin: 0 auto;
  width: 70vw;

  @media (max-width: 1440px) {
    width: 80vw;
  }
  @media (max-width: 1280px) {
    width: 90vw;
  }

  table {
    td {
      vertical-align: top;
      padding: 20px;
    }
  }
}

.subcategory-list-item {
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 100ms ease-in;
  overflow: visible;
  word-break: keep-all;
  white-space: nowrap;

  #categoryPageLg & {
    display: block;
    width: calc(100% + 20px);
    margin: 2px 0 2px -10px;
  }

  #categoryPageSm & {
    display: inline-block;
    width: max-content;
    margin: 2px;
  }

  &:hover,
  &:active,
  &.active {
    background: #EEE3;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.9);
    transition: all 10ms ease-in;
  }
}

#searchInput {
  flex: none;
  width: 50%;
  max-width: 300px;

  input {
    width: 100%;
    max-width: unset;
    min-width: unset;
    color: black;
    background: #FFF9;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 300ms;
    outline: none;

    &:focus {
      background: #FFFF;
      border: 0;
    }
  }
}

.items-grid-box {
  display: grid;
  grid-gap: 30px;

  #categoryPageLg & {
    grid-template-columns: repeat(auto-fill, 200px);
  }

  #categoryPageSm & {
    grid-template-columns: repeat(auto-fill, 260px);
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
  }

  &.items-grid-box-sm {
    justify-content: space-evenly;
  }
}
</style>
