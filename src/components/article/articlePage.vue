<template>
  <v-row>
    <v-col cols="12" md="9" class="mx-auto">
      <div class="text-subtitle-2 font-weight-medium">
        閒聊/阿寧@koty31- 兩天前
      </div>
      <div class="text-h5 font-weight-bold mb-4">拋[大學生免費遊學一年]</div>
      <div class="text-body-1 font-weight-normal mb-6">
        測試大量內文測試大量內文測試大量內文測試大量內文測試大量內文
      </div>
      <v-img
        contain
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="100%"
        max-width="100%"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
      <article-feuture></article-feuture>
      <v-divider></v-divider>
      <article-comment v-for="item in 4" :key="item"></article-comment>
    </v-col>
  </v-row>
</template>

<script>
import articleFeuture from "./articleFeuture";
import articleComment from "./articleComment";

export default {
  components: {
    articleFeuture,
    articleComment,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  activated() {
    this.checkLogin();
  },
};
</script>

<style lang="scss" scoped></style>
