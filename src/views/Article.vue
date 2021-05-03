<template>
  <keep-alive>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>{{ $store.state.userInfo }}</div>
      </v-card-text>
      <v-btn @click="testcommit(50)" color="primary">年齡</v-btn>
    </v-card>

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
    testcommit(count) {
      this.$store.commit({
        type: "addAge",
        count,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
