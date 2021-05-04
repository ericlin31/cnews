<template>
  <v-row>
    <v-col cols="9" md="8" class="mx-auto">
      <v-text-field label="帳號" v-model="account" clearable></v-text-field>
      <v-text-field
        class="mb-6 mb-md-16"
        label="密碼"
        :rules="rules"
        v-model="password"
        clearable
      ></v-text-field>
      <v-btn
        class="mb-6 mb-md-16"
        color="secondary"
        depressed
        elevation="2"
        medium
        block
        @click="checkTestPermission"
      >
        測試登入
      </v-btn>
      <v-btn
        class="mb-6 mb-md-16"
        color="primary"
        depressed
        elevation="2"
        medium
        block
        @click="checkPermission"
      >
        登入
      </v-btn>
      <v-alert v-if="errorSwitch" border="left" color="red" type="error"
        >帳號或密碼錯誤</v-alert
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      rules: [(value) => (value && value.length >= 3) || "請輸入密碼"],
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
        this.$router.push("/Article");
      } else {
        this.errorSwitch = true;
      }
    },
    checkTestPermission() {
      this.$store.commit({
        type: "updateUserInfo",
        data: {
          id: 1,
          name: "Eric",
          email: "koty310055@gmail.com",
          age: 23,
        },
      });
      this.checkLogin();
    },
  },
  watch: {
    errorSwitch() {
      setTimeout(() => {
        this.errorSwitch = false;
      }, 2000);
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style lang="scss" scoped></style>
