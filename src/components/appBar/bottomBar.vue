<template>
  <!-- footer -->
  <v-bottom-navigation
    app
    :value="value"
    color="teal"
    grow
    class="hidden-md-and-up"
  >
    <v-btn>
      <span>Recents</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn>
      <span>Favorites</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn>
      <span>Nearby</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>