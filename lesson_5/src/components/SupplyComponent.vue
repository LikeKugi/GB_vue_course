<script>
export default {
  name: "SupplyComponent",
  props: {
    supply: {
      name: String,
      count: Number,
      price: Number,
      description: String,
      year: Number,
    },
    action: Function,
  },
  computed: {
    getTotal() {
      return this.supply.count * this.supply.price;
    }
  },
  data() {
    return {
      value: 0,
      isVisibleDetails: false,
    }
  },
  methods: {
    changeSupplies() {
      this.action(this.value, this.supply.name)
    },
    setVisibleDetails() {
      this.isVisibleDetails = !this.isVisibleDetails;
    }
  }
};
</script>

<template>
<div class="supply">
  <p class="supply__name">{{supply.name}}</p>
  <p class="supply__count">{{supply.count}}</p>
  <p class="supply__total">{{getTotal}}</p>
  <form @submit.prevent="changeSupplies"
        class="supply__actions"><input type="text" v-model="value">
    <button type="submit">Change</button>
  </form>
  <button @click="setVisibleDetails">{{ isVisibleDetails ? 'Hide' : 'Show' }}</button>
  <div class="details" v-if="isVisibleDetails">
    <p>Details: {{supply.description}}</p>
    <p>Year: {{supply.year}}</p>
  </div>
</div>
</template>

<style scoped>

</style>
