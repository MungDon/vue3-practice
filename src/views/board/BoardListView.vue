<template>
  <main class="board_list_con">
    <section class="board_list_box">
      <article class="board_list_head content">
        <div>번호</div>
        <div>제목</div>
        <div>작성자</div>
        <div>등록일/수정일</div>
      </article>
      <article class="board_list_body content">
        <div>번호값</div>
        <div>제목값</div>
        <div>작성자값</div>
        <div>등록일/수정일값</div>
      </article>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
.board_list_con {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.board_list_box {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
}
.board_list_head {
  border-bottom: 2px solid #333333;
  border-top: 2px solid #333333;
  color: #333333;
  font-size: 30px;
  font-weight: bold;
}
.board_list_body {
  font-size: 20px;
  border-bottom: 1px solid darkgray;
  padding: 5px;
}
.content > div:nth-child(1) {
  width: 15%;
}
.content > div:nth-child(2) {
  width: 20%;
}
.content > div:nth-child(3) {
  width: 25%;
}
.content > div:nth-child(4) {
  width: 40%;
}
</style>
