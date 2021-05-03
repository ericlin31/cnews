<template>
  <app-bar>
    <router-view></router-view>
  </app-bar>
</template>

<script>
import appBar from "./views/AppBar";
export default {
  name: "App",
  components: {
    appBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
