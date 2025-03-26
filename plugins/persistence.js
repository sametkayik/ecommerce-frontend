export default ({store}) => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    store.commit('products/initializeWishlist', savedWishlist)

    store.subscribe((mutation, state) => {
        if (mutation.type.startsWith('products/')) {
            localStorage.setItem('wishlist', JSON.stringify(state.products.wishlist))
        }
    })
}