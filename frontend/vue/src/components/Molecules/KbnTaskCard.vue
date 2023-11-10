<template>
  <div>
    <p
      v-for="task in filteredTasks"
      :key="task.id"
      @click="handleOpen(task)"
      class="task-card"
    >
      {{ task.title }}
    </p>
    <KbnTaskForm />
  </div>
</template>

<script>
import KbnTaskForm from "./KbnTaskForm.vue";
export default {
  components: {
    KbnTaskForm,
  },
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => ["todo", "doing", "done"].includes(value),
    },
  },
  data() {
    return {
      task: {
        id: 0,
        title: "",
        description: "",
        doing: false,
        completed: false,
      },
    };
  },
  methods: {
    handleOpen(clickedTask) {
      console.log("handleOpen was called");
      this.$emit("openModal", clickedTask);
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
</style>
