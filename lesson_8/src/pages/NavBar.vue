<script>
export default {
  name: "NavBar"
};
</script>

<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/tasks">Task</router-link>
  </nav>
</template>

<style scoped lang="scss">

</style>
