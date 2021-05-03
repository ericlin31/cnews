<template>
  <v-app>
    <top-bar></top-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import topBar from "./components/appBar/topBar";
import bottomBar from "./components/appBar/bottomBar";
export default {
  name: "App",
  components: {
    topBar,
    bottomBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
