<script>
import {mapGetters, mapMutations } from "vuex";

export default {
  name: "CounterTask",
  methods: {
    ...mapMutations(["increment", "decrement"])
  },
  computed: {
    ...mapGetters(["getCounter"])
  }
};
</script>

<template>
  <div class="counter">
    <p class="counter__text">
      Создание базового хранилища: Создайте новое Vuex-хранилище, определите в нем состояние (state) и несколько базовых
      мутаций (mutations). Подключите хранилище к вашему приложению Vue.js и используйте его для управления состоянием
      приложения.
      <br>
      Создайте счетчик который хранит состояние count
      <br>
      Создайте две мутации, которые увеличивают и уменьшают значение счетчика
      <br>
      Создайте компонент счетчик
    </p>
    <h1 class="counter__title">{{ getCounter }}</h1>
    <button class="counter__btn"
            @click="increment">Increment
    </button>
    <button class="counter__btn"
            @click="decrement">Decrement
    </button>
  </div>
</template>

<style scoped
       lang="scss">

</style>
