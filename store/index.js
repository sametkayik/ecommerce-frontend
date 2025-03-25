import Vue from 'vue'
import Vuex from 'vuex'
import products from './module/products'
import cart from './module/cart'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      products: products,
      cart: cart,
    }
  })
}
export default createStore