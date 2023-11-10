<template>
  <div class="new-todo-form">
    <input
      class="todo-form"
      v-model="taskTitle"
      type="text"
      placeholder="new task"
    />
    <div class="todo-form-button">
      <button class="add-button">add</button>
      <button class="cancel-button" @click="handleCancel">cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "KbnTaskForm",
  data() {
    return {
      taskTitle: "",
    };
  },
  methods: {
    handleAdd() {
      this.$emit("addTask", this.taskTitle);
      this.taskTitle = "";
    },
    handleCancel() {
      this.taskTitle = "";
    },
  },
};
</script>

<style scoped>
.new-todo-form {
  width: 90%;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #000000;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 10px;
}
.todo-form {
  width: 85%;
  height: 30px;
  margin: 10px;
  box-sizing: border-box;
  border: 2px solid #000000;
}
.todo-form-button {
  display: flex;
  justify-content: space-around;
}
.add-button {
  width: 40%;
  height: 30px;
  margin: 10px;
  box-sizing: border-box;
}
.cancel-button {
  width: 40%;
  height: 30px;
  margin: 10px;
  box-sizing: border-box;
}
</style>
