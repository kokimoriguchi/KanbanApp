<template>
  <div class="container-modal" @click="handleClose">
    <div class="wrapper-modal" @click.stop>
      <h3>task</h3>
      <p class="task-title-modal">{{ task.title }}</p>
      <h3>description</h3>
      <p class="task-description-modal">{{ task.description }}</p>
    </div>
    <div class="bg-modal"></div>
  </div>
</template>

<script>
export default {
  name: "modalWindow",
  methods: {
    handleClose() {
      this.$emit("closeModal");
    },
  },
  props: {
    task: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.container-modal {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
.wrapper-modal {
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  border: 2px solid #000000;
  height: 320px;
  left: 50%;
  padding: 40px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
  width: 480px;
  z-index: 20;
}
.bg-modal {
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 10;
}

.task-title-modal {
  margin-bottom: 20px;
  border: 2px solid #000000;
  padding: 5px;
}

.task-description-modal {
  margin-bottom: 20px;
  min-height: 100px;
  padding: 8px;
  border: 2px solid #000000;
}
</style>
