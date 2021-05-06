<template>
  <v-row>
    <v-col cols="12" md="9" class="mx-auto">
      <v-card
        v-for="item in 6"
        :key="item"
        elevation="0"
        tile
        @click.stop="$router.push(`Page/${item}`)"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div
              class="text-subtitle-2 font-weight-regular"
              style="font-size: 0.6rem !important"
            >
              子寧@Eric.Lin - 兩天前
            </div>
            <v-list-item-title class="text-h6 font-weight-bold mb-0">
              標題{{ item }}
            </v-list-item-title>
            <v-list-item-subtitle
              class="text-body-2 font-weight-medium"
              style="-webkit-line-clamp: 3"
            >
              內文測試一下內文內文測試一下內文內文測試一下內文內文測試一下內文內文測試一下內文內文測試一下內文內文測試一下內文內文測試一下內文內文測試一下內文
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: null,
    };
  },
  methods: {},
  activated() {
    this.checkLogin();
  },
  deactivated() {},
};
</script>

<style lang="scss" scoped>
</style>
