<script setup lang="ts">
import MyPageBase from '../../components/MyPageBase.vue';
</script>

<template>
  <MyPageBase current-page="book" bg="/bg2.png" bg-type="fixed">
      <router-view v-slot="{Component}">
        <Transition name="book" mode="out-in" appear>
          <component :is="Component"/>
        </Transition>
      </router-view>
  </MyPageBase>
</template>

<style scoped>
.book-enter-active {
  transition: all 200ms ease-out;
}

.book-leave-active {
  transition: all 0ms ease-out;
}

.book-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.book-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.book-enter-to,
.book-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
