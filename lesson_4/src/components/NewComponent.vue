<script>
export default {
  name: 'NewComponent',
};
</script>

<template>
  <div class="template">
    <h1 class="template__title">Здесь могла быть ваша реклама</h1>
  </div>
</template>

<style scoped
       lang="scss">
.template {
  max-width: 1200px;
  margin: 0 auto;

  &__title {
    text-decoration: underline;
  }
}
</style>
