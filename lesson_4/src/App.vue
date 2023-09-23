<script>
import NewComponent from '@/components/NewComponent.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';
import SuppliesList from '@/components/SuppliesList.vue';

export default {
  name: 'App',
  components: {
    SuppliesList,
    GalleryComponent,
    NewComponent,
  },
};
</script>

<template>
  <div id="app">
    <NewComponent/>
    <GalleryComponent />

    <SuppliesList />
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
