<template>
  <v-app>
    <!-- 側邊導覽列 -->
    <v-navigation-drawer app v-model="drawer" class="pt-4">
      <!-- 網頁標題 -->
      <v-list-item to="/">
        <v-list-item-content>
          <v-list-item-title class="title"> CNews </v-list-item-title>
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- 搜尋選單-->
      <v-text-field
        dark
        hide-details
        clearable
        prepend-inner-icon="mdi-magnify"
        rounded
        placeholder="請輸入搜尋內容"
        outlined
        dense
        single-line
      ></v-text-field>
      <v-icon medium dark color="white" class="mx-auto ml-2">
        mdi-email
      </v-icon>
    </v-app-bar>
    <!-- 內容區塊 -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- footer -->
    <v-bottom-navigation :value="value" v-if="!isMobile()" color="teal" grow>
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
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      value: 0,
      navList: [
        { path: "/login", title: "登入" },
        { path: "/article", title: "文章列表" },
      ],
    };
  },
  methods: {
    isMobile() {
      if (screen.width <= 450) {
        return false;
      } else {
        return true;
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