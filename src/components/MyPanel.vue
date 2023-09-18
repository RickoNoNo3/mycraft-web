<script setup lang="ts">
const props = defineProps<{
  hoverable?: boolean
}>();
</script>

<template>
  <div class="my-panel" :class="{hoverable: hoverable}">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.my-panel {
  position: relative;
  display: flex;
  border-radius: 15px;
  box-shadow: 4px 4px 4px #3333;
  overflow: hidden;
  transition: all 500ms ease 0s;
  padding: 24px;
  flex-direction: column;
  font-family: "Minecraft AE Pixel";

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(150deg, #61922C, #B1D584);
    opacity: 0.8;
    z-index: -1;
    transition: all 300ms ease 0s;
  }

  &.hoverable {
    transform: scale(1);

    &:hover {
      transform: scale(1.05);
      transition: all 300ms ease 0s;
      box-shadow: 0 0 10px #3339;

      &::before {
        opacity: 1;
      }
    }

    &:active {
      transform: scale(1.02);
      transition: all 100ms ease 0s;
    }
  }
}
</style>
