<template>
  <div>
    <KbnTaskListHeader />
  </div>
  <div class="board-list">
    <KbnBoardTask />
  </div>
</template>

<script>
import KbnTaskListHeader from "@/components/Molecules/KbnTaskListHeader.vue";
import KbnBoardTask from "@/components/Organisms/KbnBoardTask.vue";

export default {
  name: "KbnBoardView",

  components: {
    KbnTaskListHeader,
    KbnBoardTask,
  },

  methods: {},
};

</script>

