<template>
  <login-cpn></login-cpn>
</template>

<script>
import loginCpn from "../components/Login/loginCpn";
export default {
  data() {
    return {};
  },
  components: {
    loginCpn,
  },
  mounted() {},
  activated() {
    this.checkLogin();
  },
};
</script>

<style lang="scss" scoped></style>
