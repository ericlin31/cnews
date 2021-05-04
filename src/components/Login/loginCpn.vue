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
        @click="checkGuestPermission"
      >
        遊客登入
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
      TGuestData: {
        id: 0,
        name: "Guest",
        email: "Guest1@gmail.com",
        age: 18,
      },
      TMemberData: {
        id: 1,
        name: "Eric",
        email: "koty310055@gmail.com",
        age: 23,
      },
    };
  },
  methods: {
    checkGuestPermission() {
      this.$store.commit({
        type: "updateUserInfo",
        data: this.TGuestData,
      });
      this.$router.push("/");
    },
    checkPermission() {
      const memberData = {
        account: "admin",
        password: "abc@123",
      };
      if (
        memberData.account === this.account &&
        memberData.password === this.password
      ) {
        this.$store.commit({
          type: "updateUserInfo",
          data: this.TMemberData,
        });
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
      }, 2000);
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style lang="scss" scoped></style>
