<template>
  <main class="board_add_con">
    <section class="board_add_box">
      <article class="board_add_title">
        <TitleInput v-model="boardAddData.title" :textTag="'제목'" />
      </article>
    </section>
  </main>
</template>

<script setup>
import TitleInput from '@/components/InputText.vue';
import { reactive } from 'vue';
const boardAddData = reactive({
  title: '',
  content: ''
});
</script>

<style scoped></style>
