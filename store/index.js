import Vue from 'vue'
import Vuex from 'vuex'
import products from './module/products'
import cart from './module/cart'
import auth from './auth'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      products,
      cart,
      auth
    }
  })
}

export default createStore