<script setup lang="ts">
import {ref} from 'vue';
import MyHeader from '../../components/MyHeader.vue';
import MyPageBase from '../../components/MyPageBase.vue';

defineProps<{ msg?: string }>();

const count = ref(0);
</script>

<template>
  <MyPageBase current-page="news" bg="/bg1.png" bg-type="fixed">
    <div class="fate-news">
      <v-img style="flex:6;" src="news-0.png"/>
      <v-img style="flex:5;" src="news-fate-text.png"/>
    </div>
    <hr style="width: 50%; margin: 50px auto"/>
    <div class="fate-news">
      <v-img style="flex:5;" src="news-fate-text.png"/>
      <v-img style="flex:6;" src="news-1.png"/>
    </div>
    <hr style="width: 50%; margin: 50px auto"/>
    <div class="fate-news">
      <v-img style="flex:6;" src="news-0.png"/>
      <v-img style="flex:5;" src="news-fate-text.png"/>
    </div>
  </MyPageBase>
</template>

<style scoped lang="scss">
.fate-news {
  width: 90vw;
  height: 400px;
  margin: 50px auto 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    max-width: 600px;
  }
}
</style>
