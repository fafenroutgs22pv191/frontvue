import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {id: '1', name: 'Товар 1', price: '123'},
      {id: '2', name: 'Товар 2', price: '129'},
      {id: '3', name: 'Товар 3', price: '143'},
      {id: '4', name: 'Товар 4', price: '223'},
      {id: '5', name: 'Товар 5', price: '2223'},
      {id: '6', name: 'Товар 6', price: '22443'},
      {id: '7', name: 'Товар 7', price: '2423'},
      {id: '8', name: 'Товар 8', price: '2213'},
      {id: '9', name: 'Товар 9', price: '24413'},
    ]
  },
  getters: {
    productById (state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
