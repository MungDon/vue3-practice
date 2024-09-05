<template>
  <header class="header_con">
    <div class="header_box">
      <ul class="menu">
        <li class="menu_title" @click="toggleSubMenu">☰</li>
        <ul class="sub_menu" v-show="isOpenSubMenu">
          <li>
            <RouterLink to="/board">게시판 목록</RouterLink>
          </li>
          <li>
            <RouterLink to="/board/add">게시판 등록</RouterLink>
          </li>
        </ul>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isOpenSubMenu = ref(false);
const toggleSubMenu = () => {
  isOpenSubMenu.value = !isOpenSubMenu.value;
};
</script>

<style scoped>
.header_con {
  width: 100%;
  background-color: #333333;
}

.header_box {
  width: 100%;
}

.menu_title:hover {
  color: red;
}

.menu_title {
  color: white;
  font-size: 50px;
}

.sub_menu > li > a {
  color: white;
  font-size: 25px;
  transition: font-size 0.3s ease;
}
.sub_menu > li > a:hover {
  color: red;
  font-size: 30px;
}
.menu,
.sub_menu {
  list-style-type: none;
}
.menu {
  padding-left: 20px;
  width: 15%;
  cursor: pointer;
}
</style>
