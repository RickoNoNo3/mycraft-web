<script setup lang="ts">
import {ref} from 'vue';
import {KinesisContainer, KinesisElement} from 'vue-kinesis';
import MyPageBase from '../../components/MyPageBase.vue';

defineProps<{ msg?: string }>();

const count = ref(0);
</script>

<template>
  <MyPageBase current-page="index" bg="/bg1.png" bg-type="parallax">
    <kinesis-container :perspective="10000" :duration="1200">
      <kinesis-element :strength="20">
        <kinesis-container :duration="2000">
          <kinesis-element :strength="5" type="depth">
            <v-img class="title-img" src="logo.png"/>
          </kinesis-element>
        </kinesis-container>
      </kinesis-element>
    </kinesis-container>

<!--    <swiper-container slides-per-view="2.5" speed="1" loop="true" autoplay="true" css-mode="false" centered-slides="true">-->
<!--      <swiper-slide>1</swiper-slide>-->
<!--      <swiper-slide>2</swiper-slide>-->
<!--      <swiper-slide>3</swiper-slide>-->
<!--      <swiper-slide>4</swiper-slide>-->
<!--      <swiper-slide>5</swiper-slide>-->
<!--    </swiper-container>-->
  </MyPageBase>
</template>

<style scoped lang="scss">
.title-img {
  display: block;
  margin: 0 auto;
  padding: 100px 0 150px 0;
  width: 80vw;
  max-width: 1200px;
}
</style>
