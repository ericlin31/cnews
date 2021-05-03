<template>
  <div>
    <!-- 側邊導覽列 -->
    <v-navigation-drawer
      app
      v-model="drawer"
      :disable-resize-watcher="true"
      class="pt-4 hidden-md-and-up"
    >
      <!-- 網頁標題 -->
      <v-list-item to="/">
        <v-list-item-content>
          <v-list-item-title class="title">CNews</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- 選單 -->
      <v-list nav dense>
        <v-list-item
          v-cloak
          v-for="(item, index) in navList"
          :key="index"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 上方導覽列 -->
    <v-app-bar app color="blue" dark>
      <!-- 開關選單 -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <!-- 搜尋選單-->
      <v-text-field
        v-if="isSearch"
        ref="searchBox"
        @blur="closeSearch"
        @keyup.enter="actionSearch"
        dark
        hide-details
        clearable
        rounded
        placeholder="請輸入搜尋內容"
        outlined
        dense
        single-line
        v-model="searchText"
      ></v-text-field>
      <v-toolbar-title v-else>{{ searchText }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon
        @click.stop="openSerach"
        medium
        dark
        color="white"
        class="mx-auto ml-2"
        >mdi-magnify</v-icon
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      navList: [
        { path: "/login", title: "登入" },
        { path: "/article", title: "文章列表" },
      ],
      isSearch: false,
      searchText: "Welcome CNews",
    };
  },
  methods: {
    openSerach() {
      this.searchText = "";
      this.isSearch = !this.isSearch;
      this.$nextTick(() => {
        this.$refs.searchBox.focus();
      });
    },
    closeSearch() {
      if (!this.searchText) {
        this.searchText = "Welcome CNews";
      } else {
        this.actionSearch();
      }
      this.isSearch = !this.isSearch;
    },
    actionSearch() {
      if (this.searchText && this.searchText !== "Welcome CNews") {
        alert(this.searchText);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application .transparent {
  border-color: black !important;
}
</style>
