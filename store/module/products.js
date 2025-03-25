import products from '../../data/products'

const state = {
    productslist: products.data,
    products: products.data,
    shuffleproducts: products.data,
    wishlist: [],
    compare: [],
    searchProduct: []
}

// getters 
const getters = {
    getProductById: (state) => {
        return id => state.products.find((product) => {
            return product.id === +id
        })
    },
    wishlistItems: (state) => {
        return state.wishlist
    },
    compareItems: (state) => {
        return state.compare
    }
}

// mutations 
const mutations = {
    setProducts(state, products) {
        state.productslist = products.map(product => ({
            ...product,
            variants: product.variants.map(variant => ({
                ...variant,

                image: product.images.find(image => image.imageId === variant.imageId) || {}
            }))
        }));
        state.products = state.productslist;
        state.shuffleproducts = state.productslist;
    },
    addToWishlist: (state, payload) => {
        const product = state.products.find( item => item.id === payload.id )
        const wishlistItems = state.wishlist.find( item => item.id === payload.id )
        if (wishlistItems) {

        } else {
            state.wishlist.push({
                ...product
            })
        }
    },
    removeWishlistItem: ( state, payload ) => {
        const index = state.wishlist.indexOf(payload)
        state.wishlist.splice(index, 1)
    },
    addToCompare: (state, payload) => {
        const product = state.products.find(item => item.id === payload.id)
        const compareItems = state.compare.find(item => item.id === payload.id)
        if (compareItems) {
        } else {
            state.compare.push({
                ...product
            })
        }
    },
    removeCompareItem: (state, payload) => {
        const index = state.compare.indexOf(payload)
        state.compare.splice(index, 1)
    },
    searchProduct: (state, payload) => {
        payload = payload.toLowerCase()
        state.searchProduct = []
        if (payload.length) {
            state.products.filter((product) => {
                if (product.title.toLowerCase().includes(payload)) {
                    state.searchProduct.push(product)
                }
            })
        }
    },
    shuffleProduct: (state, payload) => {
        state.shuffleproducts = payload
    },
    getallProduct: (state, payload) => {
        state.shuffleproducts = products.data
    }
}

// actions 
const actions = {
    addToWishlist: (context, payload) => {
        context.commit( 'addToWishlist', payload)
    },
    removeWishlistItem: ( context, payload ) => {
        context.commit( 'removeWishlistItem', payload )
    },
    addToCompare: (context, payload) => {
        context.commit('addToCompare', payload)
    },
    removeCompareItem: (context, payload) => {
        context.commit('removeCompareItem', payload)
    },
    searchProduct: (context, payload) => {
        context.commit('searchProduct', payload)
    },
    shuffleProduct: (context, payload) => {
        context.commit('shuffleProduct', payload)
    },
    getallProduct: (context) => {
        context.commit('getallProduct')
    },
    async fetchProducts({commit}) {
        try {
            const response = await fetch('https://localhost:5002/api/products');
            const {result} = await response.json();
            console.log(result)
            const transformedProducts = result.map(product => ({
                id: product.productId,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                brand: product.brand,
                collection: product.collection[0],
                hot: product.hot,
                discount: product.discount,
                stock: product.stock,
                new: product.new,
                rating: product.rating,
                tags: product.tags,
                variants: product.variants.map(variant => ({
                    color: variant.color,
                    size: variant.size,

                })),
                images: product.images.map(image => ({
                    src: image.src,
                    image_id: image.imageId,
                    alt: image.alt
                }))
            }));
            commit('setProducts', transformedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}