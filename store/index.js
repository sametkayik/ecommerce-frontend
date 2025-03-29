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
    // Ana state, mutations ve actions ekliyoruz
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
      nuxtServerInit({ commit }, { req }) {
        // Server-side dark mode kontrolü (isteğe bağlı)
        if (req.headers.cookie) {
          // Cookie'den dark mode durumunu okuyabilirsiniz
        }
      },
      initDarkMode({ commit }) {
        if (process.client) {
          // localStorage'dan kayıtlı modu al
          const savedMode = localStorage.getItem('darkMode') === 'true'
          commit('setDarkMode', savedMode)

          // Sistem tercihini kontrol et (isteğe bağlı)
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