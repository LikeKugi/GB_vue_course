<script>
export default {
  name: "CatalogPage",

  computed: {
    getRoute() {
      return this.$route;
    },

  }
};
</script>

<template>
  <div class="container">
    <div class="goods">
      <div class="goods__current">
        <h1>CATALOG PAGE</h1>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  @extend .container
}

</style>
