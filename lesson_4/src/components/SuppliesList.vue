<template>
  <div class="cart">
    <div class="cart__actions">
      <button class="cart__btn" @click="setSort('ASC')">ASC</button>
      <button class="cart__btn" @click="setSort('DESC')">DESC</button>
      <button class="cart__btn" @click="setSort('None')">None</button>
    </div>
    <div class="supplies"
         v-for="supply in sortedSupplies"
         :key="supply.title">
      <SupplyComponent :title="supply.title"
                       :description="supply.description"
                       :price="supply.price"/>
    </div>
  </div>
</template>

<script>
import SupplyComponent from '@/components/SupplyComponent.vue';

export default {
  name: 'SuppliesList',
  components: {
    SupplyComponent,
  },
  data() {
    return {
      supplies: [
        {
          title: 'first',
          price: 300,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        },
        {
          title: 'second',
          price: 150,
          description: 'Assumenda at culpa explicabo facere porro velit?',
        },
        {
          title: 'third',
          price: 400,
          description: 'A debitis dolor doloremque ipsum numquam velit.',
        },
        {
          title: 'fourth',
          price: 200,
          description: 'Dolore esse illum incidunt. Amet, consectetur, ex?',
        },
        {
          title: 'fifth',
          price: 4500,
          description: 'Atque beatae eius eligendi itaque molestias! Unde!',
        },
      ],
      sort: 'None',
    };
  },
  methods: {
    setSort(order) {
      this.sort = order;
    },
  },
  computed: {
    sortedSupplies() {
      if (this.sort === 'None') return [...this.supplies];
      if (this.sort === 'ASC') return [...this.supplies].sort((a, b) => a.price - b.price);
      return [...this.supplies].sort((a, b) => b.price - a.price);
    },
  },
};
</script>

<style scoped>

</style>
