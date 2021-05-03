<template>
  <v-app>
    <top-bar></top-bar>
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
    <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import topBar from "../components/appBar/topBar";
import bottomBar from "../components/appBar/bottomBar";
export default {
  data() {
    return {};
  },
  components: {
    topBar,
    bottomBar,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
