<template>
  <div class="login-view">
    <h1>Kanban App</h1>
    <KbnLoginForm />
    <p>{{ $store.state.auth.token }}</p>
    <p>{{ $store.state.auth.userId }}</p>
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
  margin: auto;
}
</style>
