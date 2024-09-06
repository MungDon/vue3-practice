<template>
  <button
    type="button"
    :style="{
      width: childWidth,
      height: childHeight
    }"
  >
    {{ buttonTag }}
  </button>
</template>

<script setup>
defineProps({
  buttonTag: String,
  childWidth: String,
  childHeight: String
});
</script>

<style scoped></style>
