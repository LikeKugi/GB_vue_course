<script>
export default {
  name: "CurrentUser",
  props: {
    user: {
      firstName: String,
      lastName: String,
      email: String,
      bio: String,
    },
  }
};
</script>

<template>
  <div class="current">
    <h1 class="current__title">Current User</h1>
    <p class="current__text">{{user.firstName}}</p>
    <p class="current__text">{{user.lastName}}</p>
    <p class="current__text">{{ user.bio}}</p>
  </div>
</template>

<style scoped
       lang="scss">
.current {
  border: 2px solid $bdColor;
  border-radius: 2rem;
  padding: 2rem;
  max-width: max-content;
  margin: 0 auto;
}
</style>
