<template>
  <v-row>
    <v-col cols="10" md="9">
      <v-card v-for="item in 4" :key="item" elevation="7"
        >test{{ item }}</v-card
      >
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>