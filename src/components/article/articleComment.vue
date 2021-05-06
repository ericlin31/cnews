<template>
  <v-col cols="12" md="9">
    <div class="text-subtitle-2 mb-1">
      <v-img></v-img>
      <span>阿寧@koty31- 兩天前</span>
    </div>
    <div class="text-body-2">
      耶~出國搂!耶~出國搂!耶~出國搂!耶~出國搂!耶~出國搂!
    </div>
    <article-comment-feture></article-comment-feture>
    <v-divider></v-divider>
  </v-col>
</template>

<script>
import articleCommentFeture from "./articleCommentFeture";
import ArticleCommentFeture from "./articleCommentFeture.vue";
export default {
  components: {
    articleCommentFeture,
    ArticleCommentFeture,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
