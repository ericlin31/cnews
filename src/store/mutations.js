export default {
  updateUserInfo(state, payload) {
    state.userInfo = payload.data;
  },
  deleteUserInfo(state) {
    state.userInfo = null;
  },
  updateNaviValue(state, payload) {
    state.bottomNaviValue = payload.count;
  },
};
