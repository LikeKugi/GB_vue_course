<script>
import SupplyComponent from "./SupplyComponent.vue";

export default {
  name: "CartComponent",
  components: {SupplyComponent},
  props: {
    supplies: Array
  },
  methods: {
    setCount(value, name) {
      this.supplies.find(el => el.name === name).count = value;
    }
  },
  computed: {
    getTotal() {
      return this.supplies.reduce((price, el) => price + el.count * el.price, 0);
    }
  }
};
</script>

<template>
  <div>
    <p>Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и
      видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения количества
      товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо автоматически
      пересчитывать стоимость каждого товара и обновлять общую сумму покупки.</p>
    <SupplyComponent v-for="supply in supplies" :supply="supply" :action="setCount" :key="supply.name" />
    <p>Total: {{getTotal}}</p>
  </div>
</template>

<style scoped>

</style>
