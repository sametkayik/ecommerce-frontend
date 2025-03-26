const state = () => ({
    token: process.client ? localStorage.getItem('authToken') : null
})

const actions = {
    logout({commit}) {
        commit('CLEAR_TOKEN')
        localStorage.removeItem('authToken')
        localStorage.removeItem('cart')
        localStorage.removeItem('wishlist')
        window.location.href = '/login'
    }
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
        localStorage.setItem('authToken', token)
    },
    CLEAR_TOKEN(state) {
        state.token = null
        localStorage.removeItem('authToken')
    }
}

const getters = {
    isAuthenticated(state) {
        return !!state.token
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}