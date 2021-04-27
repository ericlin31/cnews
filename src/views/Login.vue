<template>
  <div class="login">
    <div>
      <span>帳號:</span>
      <input type="text" v-model="account" value="" />
    </div>
    <div>
      <span>密碼:</span>
      <input type="text" v-model="password" value="" />
    </div>
    <p v-if="errorSwitch" class="error">帳號或密碼錯誤</p>
    <button @click="checkPermission">登入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      errorSwitch: false,
    };
  },
  methods: {
    checkPermission() {
      const memberData = {
        account: "admin",
        password: "abc@123",
      };
      if (
        memberData.account === this.account &&
        memberData.password === this.password
      ) {
        this.$router.push("/");
      } else {
        this.errorSwitch = true;
      }
    },
  },
  watch: {
    errorSwitch() {
      setTimeout(() => {
        this.errorSwitch = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin: 0;
  padding: 0;
}
p {
  margin-bottom: 0;
}
p.error {
  width: 100%;
  height: auto;
  position: fixed;
  font-size: 2rem;
  font-weight: 600;
  color: red;
  text-align: center;
  bottom: 50%;
}
</style>