<script>
import {mapActions, mapGetters } from "vuex";

export default {
  name: "GoodsItems",
  computed: {
    ...mapGetters(['getGoods'])
  },
  methods: {
    ...mapActions(['addToCart', 'getCatalogData']),
  },
  created() {
    this.getCatalogData()
  }
};
</script>

<template>
  <div class="goods">
    <div class="goods__good good" v-for="good in getGoods" :key="good.id">
      <p class="good__name">{{good.name}}</p>
      <p class="good__price">{{good.price}}</p>
      <button class="good__btn" @click="addToCart(good.id)">Just do it</button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
