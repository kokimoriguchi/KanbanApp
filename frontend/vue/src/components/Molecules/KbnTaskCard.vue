<template>
  <div>
    <p v-for="task in filteredTasks" :key="task.id" class="task-card">
      {{ task.title }}
    </p>
    <div class="new-todo-form">
      <input
        class="todo-form"
        type="text"
        placeholder="new task"
        v-model="title"
      />
      <div class="todo-form-button">
        <button class="add-button">add</button>
        <button class="cancel-button">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => ["todo", "doing", "done"].includes(value),
    },
  },
  computed: {
    filteredTasks() {
      switch (this.status) {
        case "todo":
          return this.$store.state.tasks.filter(
            (task) => task.doing === false && task.completed === false
          );
        case "doing":
          return this.$store.state.tasks.filter(
            (task) => task.doing === true && task.completed === false
          );
        case "done":
          return this.$store.state.tasks.filter(
            (task) => task.completed === true
          );
        default:
          return [];
      }
    },
  },
};
</script>

<style scoped>
.task-card {
  width: 90%;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: scroll;
  border: 2px solid #000000;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 10px;
}
.task-card:hover {
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s;
}
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
