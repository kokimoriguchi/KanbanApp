import { createStore } from "vuex";

export default createStore({
  state: {
    auth: {
      token: "token",
      userId: null,
    },
    board: {
      lists: [],
    },
    tasks: [],
  },
  mutations: {
    setAuth(state, auth) {
      state.auth.token = auth.token;
      state.auth.userId = auth.userId;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  getters: {},
  actions: {},
  modules: {},
});
