<template>
  <v-row>
    <v-col cols="12" md="9" class="mx-auto">
      <v-card
        v-for="item in 10"
        :key="item"
        elevation="0"
        tile
        @click.stop="$emit('switch-article')"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="author-info-text">子寧@Eric.Lin - 兩天前</div>
            <v-list-item-title class="text-h6 font-weight-bold mb-0">
              標題{{ item }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-body-2 font-weight-medium"
              >測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文測試一下內文
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
    console.log(
      (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0)
    );
  },
  deactivated() {
    console.log(
      (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0)
    );
  },
};
</script>

<style lang="scss" scoped>
.author-info-text {
  font-size: 0.6rem;
  font-weight: 400;
  color: grey;
}
</style>
