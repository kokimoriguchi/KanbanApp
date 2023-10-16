<template>
  <div class="board">
    <div class="header">
      <h1 class="center">KanbanApp</h1>
      <button class="logout-button" @click="logout()">logout</button>
    </div>
    <p class="line"></p>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.board {
  margin: auto;
  font-family: "Gill Sans", sans-serif;
  text-align: center; /* 中央揃え */
  display: flex;
  flex-direction: column; /* 子要素を縦に配置 */
  align-items: center; /* 子要素を中央に配置 */
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between; /* ヘッダー内の要素を左右に配置 */
  align-items: center; /* ヘッダー内の要素を中央に配置 */
}

.center {
  flex-grow: 1; /* 中央に配置 */
}

.line {
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

.logout-button {
  /* ログアウトボタンに対するスタイル設定 */
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.logout-button:hover {
  /* ログアウトボタンに対するスタイル設定 */
  background-color: #ccc;
  color: #fff;
  transition: 0.3s;
}
</style>
