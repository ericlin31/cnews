import Vue from "vue";
import Vuex from "vuex";
import mutations from "../store/mutations";
import actions from "../store/actions";
import getters from "../store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false, //讀取動畫
    appBar: {
      bottomNaviValue: 0, //下選單選擇
      requiresReturn: false,
    },
    userInfo: null, //登入資訊
  },
  mutations,
  actions,
  getters,
  modules: {},
});
