<template>
  <div class="container-modal" v-if="modalShow">
    <div class="wrapper-modal">
      <h2>task</h2>
      <p class="text-modal">task description</p>
    </div>
    <div class="bg-modal"></div>
  </div>
</template>

<script>
export default {
  name: "modalWindow",
  props: {
    modalShow: {
      type: Boolean,
      default: false,
      required: true,
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
</style>
