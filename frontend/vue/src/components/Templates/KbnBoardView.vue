<template>
  <div v-show="modalShow">
    <!-- 下記の記述で@closeModal="showModal"は子コンポーネントのcloseModalという名前のイベントが発火した時showModalを発火させる記述 -->
    <KbnTaskDetailModal :task="selectedTask" @closeModal="showModal" />
  </div>
  <div>
    <KbnBoardNavigation />
  </div>
  <div>
    <KbnBoardTask @openModal="showModal" />
  </div>
</template>

<script>
import KbnBoardNavigation from "@/components/Molecules/KbnBoardNavigation.vue";
import KbnBoardTask from "@/components/Organisms/KbnBoardTask.vue";
import KbnTaskDetailModal from "./KbnTaskDetailModal.vue";

export default {
  name: "KbnBoardView",

  components: {
    KbnBoardTask,
    KbnBoardNavigation,
    KbnTaskDetailModal,
  },
  data() {
    return {
      modalShow: false,
      selectedTask: {},
    };
  },
  methods: {
    showModal(task = {}) {
      if (task) {
        this.selectedTask = task;
      }
      this.modalShow = !this.modalShow;
    },
  },
};
</script>

<style scoped></style>
