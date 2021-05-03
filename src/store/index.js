import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: "Eric",
      email: "koty310055@gmail.com",
      age: 23,
    },
  },
  mutations: {
    addAge(state, payload) {
      state.userInfo.age = payload.count;
    },
  },
  actions: {},
  modules: {},
});
