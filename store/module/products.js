import products from '../../data/products'

const state = {
    productslist: products.data,
    products: products.data,
    shuffleproducts: products.data,
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
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
        return state.wishlist.map(item => ({
            ...item,
            color: item.color || (item.variants?.[0]?.color),
            size: item.size || (item.variants?.[0]?.size),
            variantId: item.variantId || `${item.id}-${item.color || ''}-${item.size || ''}`
        }))
    },
    compareItems: (state) => {
        return state.compare
    }
}

// mutations
const mutations = {
    addProduct(state, product) {
        state.products.push(product);
        state.productslist.push(product);
        state.shuffleproducts.push(product);
    },
    initializeWishlist(state, wishlist) {
        state.wishlist = wishlist
    },
    removeWishlistItem(state, product) {
        state.wishlist = state.wishlist.filter(item =>
            product.variantId ? item.variantId !== product.variantId : item.id !== product.id
        )
        if (process.client) {
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        }
    },
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
        const product = state.products.find(item => item.id === payload.id)
        const wishlistItems = state.wishlist.find(item => item.id === payload.id)
        if (wishlistItems) {

        } else {
            state.wishlist.push({
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
    async createProduct({ commit }, productData) {
        try {
            // Prepare the data in the format the API expects
            const payload = {
                title: productData.title,
                price: productData.price,
                description: productData.description,
                category: productData.category,
                brand: productData.brand,
                collection: productData.collection,
                hot: productData.hot,
                discount: productData.discount,
                stock: productData.stock,
                new: productData.new,
                rating: productData.rating,
                tags: productData.tags,
                variants: productData.variants.map(variant => ({
                    color: variant.color,
                    size: variant.size,
                    sku: variant.sku,
                    imageId: 1
                })),
                images: productData.images.map(image => ({
                    src: image.src,
                    alt: image.alt
                }))
            };

            const response = await this.$axios.post('https://localhost:44390/api/products', payload);

            if (!response.data) {
                throw new Error('Empty response from server');
            }

            const createdProduct = response.data;

            if (!createdProduct) {
                throw new Error('Invalid product data in response');
            }

            // Transform the response to match your store structure
            const transformedProduct = {
                id: createdProduct.productId,
                title: createdProduct.title,
                price: createdProduct.price,
                description: createdProduct.description,
                category: createdProduct.category,
                brand: createdProduct.brand,
                collection: createdProduct.collection?.[0] || '',
                hot: createdProduct.hot,
                discount: createdProduct.discount,
                stock: createdProduct.stock,
                new: createdProduct.new,
                rating: createdProduct.rating,
                tags: createdProduct.tags || [],
                variants: (createdProduct.variants || []).map(variant => ({
                    variantId: variant.variantId,
                    color: variant.color,
                    size: variant.size,
                    sku: variant.sku

                })),
                images: (createdProduct.images || []).map(image => ({
                    imageId: image.imageId,
                    src: image.src,
                    alt: image.alt
                }))
            };

            commit('addProduct', transformedProduct);
            return transformedProduct;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },
    async fetchProducts({commit}) {
        try {
            const response = await fetch('https://localhost:5002/api/products');
            const {result} = await response.json();
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
                // mock variants and images
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

    addToWishlist: (context, payload) => {
        context.commit('addToWishlist', payload)
    },
    removeWishlistItem: (context, payload) => {
        context.commit('removeWishlistItem', payload)
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
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}