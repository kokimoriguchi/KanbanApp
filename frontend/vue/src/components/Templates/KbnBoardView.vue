<template>
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

export default {
  name: "KbnBoardView",

  components: {
    KbnBoardTask,
    KbnBoardNavigation,
},

  methods: {},
};

</script>

<style scoped>
</style>

