<template>
  <span>{{ selectTag }}</span>
  <select v-model="selectValue" @change="handleSelect">
    <option :value="null" disabled selected>==옵션 선택==</option>
    <option v-for="option in optionList" :key="option" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['change']);
defineProps({
  optionList: [],
  selectTag: String
});
const selectValue = ref(null);
const handleSelect = () => {
  emit('change', selectValue.value);
};
</script>

<style scoped></style>
