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
    },
    state: {
      darkMode: false
    },
    mutations: {
      toggleDarkMode(state) {
    state.darkMode = !state.darkMode
    if (process.client) {
      localStorage.setItem('darkMode', state.darkMode)
      document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light')
    }
  },
  setDarkMode(state, value) {
    state.darkMode = value
    if (process.client) {
      document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light')
    }
  }
    },
    actions: {
      initDarkMode({ commit }) {
        if (process.client) {
          const savedMode = localStorage.getItem('darkMode') === 'true'
          commit('setDarkMode', savedMode)

          const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          if (prefersDark && !savedMode) {
            commit('setDarkMode', true)
          }
        }
      }
    },
    getters: {
      isDarkMode: state => state.darkMode
    }
  })
}

export default createStore