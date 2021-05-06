export default {
  Authorization(state) {
    if (state.userInfo !== null) return true;
    return false;
  },
};
