<template>
  <v-row>
    <v-col cols="12" md="9" class="mx-auto">
      <v-card elevation="0" tile>
        <v-btn
          class="mb-3"
          rounded
          color="primary"
          dark
          @click.stop="$emit('switch-article')"
          >返回</v-btn
        >
        <v-list-item-title>文章內容</v-list-item-title>
      </v-card>
    </v-col>
  </v-row>
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
