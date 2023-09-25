<script>
import AuthForm from "./components/AuthForm.vue";
import CartComponent from "./components/CartComponent.vue";
import MortgageCalc from "./components/MortgageCalc.vue";
export default {
  name: 'App',
  components: {MortgageCalc, CartComponent, AuthForm},
  data() {
    return {
      isAuthenticated: false,
      supplies: [
        {
          name: 'Lorem',
          count: 0,
          price: 100,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          year: 2001
        },
        {
          name: 'Ipsum',
          count: 0,
          price: 100,
          description: 'Facilis iusto, odit optio quo ullam voluptatibus!',
          year: 2002,
        },
        {
          name: 'Dolor',
          count: 0,
          price: 100,
          description: 'Adipisci amet blanditiis dolorem est hic, impedit.',
          year: 2003,
        },
        {
          name: 'sit',
          count: 0,
          price: 100,
          description: 'Consequuntur fuga mollitia nam necessitatibus obcaecati voluptatem!',
          year: 2004,
        },
        {
          name: 'amet',
          count: 0,
          price: 100,
          description: 'Ex fugit minus molestiae quibusdam, quisquam rem.',
          year: 2005,
        },
      ]
    }
  },
  methods: {
    setAuthenticated() {
      this.isAuthenticated = !this.isAuthenticated;
    }
  }
}
</script>

<template>
  <div>
    <AuthForm :auth-action="setAuthenticated" :is-authenticated="isAuthenticated" />
    <CartComponent v-if="!isAuthenticated" :supplies="supplies" />
    <MortgageCalc />
  </div>
</template>

<style scoped>

</style>
