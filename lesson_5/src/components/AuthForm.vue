<script>
export default {
  name: "AuthForm",
  props: {
    isAuthenticated: Boolean,
    authAction: Function
  }
};
</script>

<template>
  <div>
    <p>Создайте компонент "Аутентификация" (Authentication), который будет отображать форму входа или сообщение об
      успешной аутентификации в зависимости от переданного пропса isAuthenticated. Используйте директиву v-if для
      условного отображения разных элементов в шаблоне компонента.</p>
    <form @submit.prevent="authAction"
          v-if="isAuthenticated">
      <input type="text">
      <button type="submit">Login</button>
    </form>
    <div v-else>Done
      <button @click="authAction">logout</button>
    </div>
  </div>
</template>

<style scoped>

</style>
