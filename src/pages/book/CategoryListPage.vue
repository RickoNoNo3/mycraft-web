<script setup lang="ts">
import ItemPanel from './ItemPanel.vue';
import {ItemBoxType} from '../../type/BookTypes';
import {useRouter} from 'vue-router';
import {ListCategories} from './web';
import {onMounted, ref, watch} from 'vue';

const router = useRouter();

const categories = ref([] as ItemBoxType[]);

onMounted(() => {
  ListCategories().then(data => {
    categories.value = data
  }).catch(e => console.error(e));
})
</script>

<template>
  <v-container key="categoryList">
    <v-row justify="space-between">
      <v-col
          v-for="c in categories"
          :key="c.id"
          cols="12" sm="6" md="4" lg="3" xl="3" xxl="2"
          class="flex place-content-center my-4"
      >
        <router-link :to="`/book/${c.id}`">
          <ItemPanel size="lg" :item="c"/>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
