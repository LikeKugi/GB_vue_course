<script>
export default {
  name: "MortgageForm",
  props: {
    action: Function,
  },
  data() {
    return {
      total: 0,
      percent: 0,
      term: 0,
    }
  },
  methods: {
    onSubmit() {
      // Validate logic
      this.action(this.total, this.percent, this.term);
    }
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label>суммы кредита <input type="number" v-model="total"></label>
    <label>процентной ставки <input type="number" v-model="percent"></label>
    <label>срока кредита <input type="number" v-model="term"></label>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>

</style>
