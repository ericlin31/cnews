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
    </v-app-bar>
    <!-- 內容區塊 -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- footer -->
    <v-bottom-navigation :value="value" color="teal" grow>
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
};
</script>
