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
      <v-list nav dense class="fill-height" max-height="80%">
        <v-list-item
          v-cloak
          v-for="(item, index) in navList"
          :key="index"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item class="mb-auto">
        <v-list-item-content>
          <v-btn color="primary" mediumn block @click.stop="logOut"
            >logout</v-btn
          >
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <!-- 側邊導覽列 -->

    <!-- 上方導覽列 -->
    <v-app-bar app color="blue" dark>
      <!-- 開關選單 -->
      <v-app-bar-nav-icon
        dark
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      >
        <!-- 返回按鈕 -->
        <v-icon
          dark
          v-if="$store.state.appBar.requiresReturn"
          @click.stop="$router.go(-1)"
          >mdi-arrow-left
        </v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title v-if="!isSearch">{{ searchText }}</v-toolbar-title>
      <v-spacer></v-spacer>
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
      <v-icon @click.stop="openSerach" medium dark color="white" class="mx-2"
        >mdi-magnify</v-icon
      >

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in navList" :key="item.title" :to="item.path">
          <v-icon left dark>mdi-{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- 上方導覽列 -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      navList: [
        { path: "/Login", title: "登入", icon: "face" },
        { path: "/Article/List", title: "主頁面", icon: "home" },
        { path: "/Collection", title: "收藏", icon: "folder" },
        { path: "/Notification", title: "通知", icon: "bell" },
        { path: "/About", title: "個人", icon: "face-profile" },
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
    logOut() {
      this.$store.commit({
        type: "deleteUserInfo",
      });
      this.$router.push("/Login");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application .transparent {
  border-color: black !important;
}
</style>
