<template>
  <div class="feture">
    <v-btn dark text x-small color="black lighten-1" style="padding: 0px">
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-btn>
    <v-btn dark text x-small color="black lighten-1" style="padding: 0px">
      <v-icon>mdi-share</v-icon>
    </v-btn>
    <div class="likes">
      <v-btn
        x-small
        class="add"
        color="red lighten-2"
        text
        icon
        @click.stop="likes += 1"
      >
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
      <div class="counts">{{ likes }}</div>
      <v-btn
        x-small
        class="minus"
        color="purple lighten-2"
        text
        icon
        @click.stop="likes -= 1"
      >
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.feture {
  display: flex;
  height: 2.5rem;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 1% 0 1%;
}
.likes {
  flex: 1 1 22%;
  max-width: 22%;
  text-align: center;
  .add {
    display: inline-flex;
  }
  .counts {
    display: inline-flex;
    font-weight: bold;
    font-size: 1rem;
    padding: 0 8px;
    vertical-align: middle;
    color: rgb(88, 88, 88);
  }
  .minus {
    display: inline-flex;
  }
}
</style>
