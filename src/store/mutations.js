export default {
  updateUserInfo(state, payload) {
    state.userInfo = payload.data;
  },
  deleteUserInfo(state) {
    state.userInfo = null;
  },
  updateBottomNaviValue(state, payload) {
    state.appBar.bottomNaviValue = payload.count;
  },
  updateReturnValue(state, payload) {
    state.appBar.requiresReturn = payload.show;
  },
};
