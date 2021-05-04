<template>
  <!-- footer -->
  <v-bottom-navigation
    app
    :value="$store.state.bottomNaviValue"
    color="teal"
    grow
    class="hidden-md-and-up"
  >
    <v-btn to="/">
      <span>主頁面</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn to="/Collection">
      <span>收藏</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn to="/Notification">
      <span>通知</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
    <v-btn to="/About">
      <span>個人</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
