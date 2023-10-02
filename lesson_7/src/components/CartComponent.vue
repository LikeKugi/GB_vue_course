<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartComponent",
  methods: {
    ...mapActions(['getInitialCart'])
  },
  computed: {
    ...mapGetters(['getCart'])
  },
  created() {
    this.getInitialCart()
  }
};
</script>

<template>
  <div class="cart">
    <div class="div">
      TOTAL: {{getCart.reduce((a, el) => a + el.price * el.amount, 0)}}
    </div>
    <div class="cart__item item" v-for="item in getCart" :key="item.id">
      <p class="item__name">{{item.name}}</p>
      <p class="item__price">{{item.price}}</p>
      <p class="item__amount">{{item.amount}}</p>
      <h2 class="item__total">{{item.price * item.amount}}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
