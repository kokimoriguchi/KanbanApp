<template>
  <div>
    <KbnTaskDetailModal />
  </div>
  <div>
    <KbnBoardNavigation />
  </div>
  <div>
    <KbnBoardTask />
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

  methods: {},
};
</script>

<style scoped></style>
