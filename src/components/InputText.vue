<template>
  <label class="input tag" for="input_text">
    <span>{{ textTag }}</span>
  </label>
  <input
    type="text"
    id="input_text"
    :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :style="{ height: childHeight, width: childWidth }"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  textTag: String,
  childHeight: String,
  childWidth: String
});
</script>

<style scoped></style>
