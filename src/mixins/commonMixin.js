export default {
  methods: {
    checkLogin() {
      //檢查是否登入
      if (this.$store.getters.isLoging) {
        if (this.$router.currentRoute.name === "Article") return;
        else this.$router.push("/Article");
      } else {
        if (this.$router.currentRoute.name === "Login") return;
        this.$router.push("/login");
      }
    },
  },
};
