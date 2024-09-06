<template>
  <main class="board_add_con">
    <section class="board_add_box">
      <article class="board_add_content">
        <CategorySelect
          :optionList="list"
          :select-tag="'카테고리'"
          @change="bindingSelectData"
        />
        <TitleInput v-model="boardAddData.title" :textTag="'제목'" />
        <textarea placeholder="내용" v-model="boardAddData.content"></textarea>
        <!--나중에는 에디터로 사용예정-->
        <BoardAddButton @click="boardAdd" :button-tag="'등록'" />
      </article>
    </section>
  </main>
</template>

<script setup>
import TitleInput from '@/components/InputText.vue';
import { reactive } from 'vue';
import BoardAddButton from '@/components/ButtonComponent.vue';
import CategorySelect from '@/components/SelectBoxCommponent.vue';

const boardAddData = reactive({
  title: '',
  content: '',
  category: ''
});
const boardAdd = () => {
  console.log(boardAddData.title);
  console.log(boardAddData.content);
  console.log(boardAddData.category);
};
const bindingSelectData = (value) => {
  boardAddData.category = value;
  console.log(boardAddData.category);
};
const list = [
  {
    value: '공지',
    name: '공지'
  },
  {
    value: '일반글',
    name: '일반글'
  },
  {
    value: '유머글',
    name: '유머글'
  }
];
</script>

<style scoped></style>
