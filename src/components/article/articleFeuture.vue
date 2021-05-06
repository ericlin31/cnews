<template>
  <div class="feture">
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
    <div class="comment">
      <v-btn x-small text color="grey">
        <v-icon>mdi-comment</v-icon>
        <div class="counts">{{ likes }}</div>
      </v-btn>
    </div>
    <div large class="share">
      <v-btn text color="grey">
        <v-icon>mdi-share</v-icon>
        <span>分享</span>
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
  justify-content: space-between;
  align-items: center;
  margin: 10px 1% 0 1%;
}
.likes {
  flex: 0 0 33.3%;
  max-width: 33.3%;
  text-align: left;
  .add {
    display: inline-flex;
  }
  .counts {
    display: inline-flex;
    font-weight: bold;
    font-size: 1.4rem;
    padding: 0 8px;
    vertical-align: middle;
    color: rgb(88, 88, 88);
  }
  .minus {
    display: inline-flex;
  }
}
.comment {
  flex: 0 0 33.3%;
  max-width: 33.3%;
  margin: 0 auto;
  text-align: center;
  .counts {
    display: inline-flex;
    font-weight: normal;
    font-size: 1.2rem;
    padding: 0 2px;
    vertical-align: middle;
    color: rgb(88, 88, 88);
  }
}
.share {
  flex: 0 0 33.3%;
  max-width: 33.3%;
  margin: 0 auto;
  text-align: right;
}
</style>
