<template>
  <keep-alive>
    <article-list v-if="isShow" @switch-article="switchArticle"></article-list>
    <article-page v-else @switch-article="switchArticle"></article-page>
  </keep-alive>
</template>

<script>
import articleList from "../components/article/articleList";
import articlePage from "../components/article/articlePage";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    articleList,
    articlePage,
  },
  methods: {
    switchArticle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped></style>
