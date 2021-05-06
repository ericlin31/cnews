<template>
  <!-- footer -->
  <v-bottom-navigation
    app
    :value="$store.state.appBar.bottomNaviValue"
    color="teal"
    grow
    class="hidden-md-and-up"
  >
    <v-btn v-for="(item, index) in navList" :key="index" :to="item.path">
      <span>{{ item.title }}</span>
      <v-icon>mdi-{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { path: "/Article", title: "主頁面", icon: "home" },
        { path: "/Collection", title: "收藏", icon: "folder" },
        { path: "/Notification", title: "通知", icon: "bell" },
        { path: "/About", title: "個人", icon: "face-profile" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
