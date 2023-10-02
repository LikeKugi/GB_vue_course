<script>

import CounterTask from "@/components/CounterTask.vue";
import GoodsItems from "@/components/GoodsItems.vue";
import CartComponent from "@/components/CartComponent.vue";

export default {
  name: 'App',
  components: {
    CartComponent,
    GoodsItems,
    CounterTask
  },
}
</script>

<template>
  <div id="app">
    <CounterTask />
    <GoodsItems />
    <CartComponent />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
