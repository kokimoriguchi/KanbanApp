<template>
  <div class="task-index">
    <div class="list">
      <KbnTaskListHeader>TODO</KbnTaskListHeader>
      <KbnTaskCard status="todo" @openModal="openModal" />
    </div>
    <div class="list">
      <KbnTaskListHeader>DOING</KbnTaskListHeader>
      <KbnTaskCard status="doing" @openModal="openModal" />
    </div>
    <div class="list">
      <KbnTaskListHeader>DONE</KbnTaskListHeader>
      <KbnTaskCard status="done" @openModal="openModal" />
    </div>
  </div>
</template>

<script>
import KbnTaskListHeader from "@/components/Molecules/KbnTaskListHeader.vue";
import KbnTaskCard from "@/components/Molecules/KbnTaskCard.vue";

export default {
  name: "KbnTaskList",

  components: {
    KbnTaskListHeader,
    KbnTaskCard,
  },
  methods: {
    openModal(task) {
      this.$emit("openModal", task);
    },
  },
};
</script>

<style scoped>
.task-index {
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.list {
  width: calc(100% / 3);
  text-align: center;
  border: 2px solid #000000;
  margin: 6px;
  border-radius: 10px;
}
</style>
