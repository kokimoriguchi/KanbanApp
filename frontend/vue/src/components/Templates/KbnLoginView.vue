<template>
  <div class="login-view">
    <h1>Kanban App</h1>
    <KbnLoginForm />
  </div>
</template>

<script>
import KbnLoginForm from "@/components/Molecules/KbnLoginForm.vue";

export default {
  name: "KbnLoginView",

  components: {
    KbnLoginForm,
  },

  methods: {},
};
</script>

<style scoped>
.login-view {
  width: 320px;
  padding-top: 8%;
  margin: auto;
  font-family: "Gill Sans", sans-serif;
}
</style>
