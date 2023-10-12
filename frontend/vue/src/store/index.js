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
  },
  mutations: {
    setAuth(state, auth) {
      state.auth.token = auth.token;
      state.auth.userId = auth.userId;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
