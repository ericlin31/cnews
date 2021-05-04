export default {
  updateUserInfo(state, payload) {
    state.userInfo = payload.data;
  },
  deleteUserInfo(state) {
    state.userInfo = null;
  },
};
