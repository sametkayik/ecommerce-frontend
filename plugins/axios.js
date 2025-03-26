export default function ({$axios, store, redirect}) {
    $axios.onRequest(config => {
        const token = store.state.auth.token || localStorage.getItem('authToken')
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`
        }
        return config
    })

    $axios.onError(error => {
        const status = error.response?.status
        if (status === 401) {
            store.dispatch('auth/logout')
            redirect('/login')
        } else if (status === 500) {
            console.error('Server error:', error)
        }
        return Promise.reject(error)
    })
}