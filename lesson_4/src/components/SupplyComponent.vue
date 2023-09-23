<script>
export default {
  name: 'SupplyComponent',
  props: ['title', 'price', 'description'],
};
</script>

<template>
  <div class="card">
    <h3 class="card__title">{{title}}</h3>
    <p class="card__price">{{price}}</p>
    <p class="card__description">{{ description}}</p>
  </div>
</template>

<style scoped>

</style>
