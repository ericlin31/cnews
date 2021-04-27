<template>
  <v-row>
    <v-col cols="" md="9" class="mx-auto">
      <v-card tile v-for="item in 4" :key="item" elevation="0">
        <v-card-title>test{{ item }}</v-card-title>
        <v-card-text>
          <v-row align="left" class="mx-0">
            <v-col> 測試一下內文 </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>