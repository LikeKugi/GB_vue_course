<script>
export default {
  name: "GoodsList",
  data() {
    return {
      goods: [
        {id: 1, name: 'Lorem1', price: 100},
        {id: 2, name: 'Lorem2', price: 200},
        {id: 3, name: 'Lorem3', price: 300},
        {id: 4, name: 'Lorem4', price: 400},
        {id: 5, name: 'Lorem5', price: 500},
        {id: 6, name: 'Lorem6', price: 600},
        {id: 7, name: 'Lorem7', price: 700},
        {id: 8, name: 'Lorem8', price: 800},
        {id: 9, name: 'Lorem9', price: 900},
        {id: 10, name: 'Lorem10', price: 100},
        {id: 11, name: 'Lorem11', price: 100},
        {id: 12, name: 'Lorem12', price: 100},
        {id: 13, name: 'Lorem13', price: 100},
        {id: 14, name: 'Lorem14', price: 100},
        {id: 15, name: 'Lorem15', price: 100},
      ]
    }
  },
  computed: {
    renderedGoods() {
      const startIdx = this.$route.params?.page;
      if (!startIdx) return this.goods;
      const start = (+startIdx - 1) * 5;
      return this.goods.slice(start, start + 5);
    },
    totalPages() {
      return Math.ceil(this.goods.length / 5)
    },
  }
};
</script>

<template>

  <div class="goods">
    <div class="goods__nav">
      <router-link class="goods__btn" v-for="page in totalPages" :to="`/catalog/${page}`">{{page}}</router-link>
    </div>
    <div class="goods__box">Товары
      <div class="goods__good good"
           v-for="(good) in renderedGoods"
           :key="good.id">
        <h2 class="good__title">{{ good.name }}</h2>
        <p class="good__price">{{ good.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goods {
  &__btn {
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
}
.good {
  display: flex;
  justify-content: space-evenly;
}
</style>
