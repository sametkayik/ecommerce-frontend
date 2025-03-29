export default ({store}) => {
    if (process.client) {
        const token = localStorage.getItem('authToken')
        if (token) {
            store.commit('auth/SET_TOKEN', token)
        }

        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        store.commit('products/initializeWishlist', savedWishlist)

        store.subscribe((mutation, state) => {
            if (mutation.type.startsWith('products/')) {
                localStorage.setItem('wishlist', JSON.stringify(state.products.wishlist))
            }
        })
    }
}