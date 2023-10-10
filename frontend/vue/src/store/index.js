import { createStore } from "vuex";

export default createStore({
  state: {
    auth: {
      token: null,
      userId: null,
    },
    board: {
      lists: [],
    },
  },
});
