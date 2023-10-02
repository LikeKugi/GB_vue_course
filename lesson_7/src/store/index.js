import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    cartItems: [],
    goods: []
  },
  getters: {
    getCounter: state => state.count,
    getCart: state => state.cartItems,
    getGoods: state => state.goods,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    ADD_TO_CART(state, payloadGood) {
      state.cartItems.push(payloadGood)
    },
    REMOVE_FROM_CART(state, payloadId) {
      state.cartItems = state.cartItems.filter(el => el.id !== payloadId)
    },
    SET_GOODS_STATE(state, payload) {
      state.goods = payload;
    },
    SET_CART_STATE(state, payload) {
      state.cartItems = payload
    },
  },
  actions: {
    addToCart({state, commit}, payloadId) {
      const element = state.cartItems.find(el => el.id === payloadId);
      if (element) {
        element.amount += 1
      } else {
        const queryElement = state.goods.find(el => el.id === payloadId);
        const newElement = {
          ...queryElement,
          amount: 1
        }
        commit('ADD_TO_CART', newElement);
      }
    },
    getCatalogData({commit}) {
      const data = [{
            id: 1,
            name: "first",
            price: 100
          },
          {
            id: 2,
            name: "second",
            price: 200
          },
          {
            id: 3,
            name: "third",
            price: 300
          },
          {
            id: 4,
            name: "fourth",
            price: 400
          },
          {
            id: 5,
            name: "fifth",
            price: 500
          },]
      setTimeout(() => {
        commit('SET_GOODS_STATE', data)
      }, 1500)
    },
    getInitialCart({commit}) {
      const data = [{
        id: 1,
        name: "first",
        price: 100,
        amount: 2,
      },];
      setTimeout(() => {
        commit('SET_CART_STATE', data);
      }, 2000)
    },
  },
  modules: {}
});
