import products from '../../data/products'

const state = {
  products: products.data,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
}
// getters
const getters = {
  cartTotal: state => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  },
  cartItems: (state) => {
    return state.cart
  },
  cartTotalAmount: (state) => {
    return state.cart.reduce( (total, product) => {
      return total + ( (product.price - ( product.price * product.discount / 100) ) * product.quantity)
      }, 0 )
  }
}
// actions
const actions = {
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
      context.commit('removeCartItem', payload)
  }
}

// mutations
const mutations = {
  initializeCart(state, cart) {
    state.cart = cart
  },
  addToCart: (state, payload) => {
    console.log('Sepete Eklenen:', payload);

    const variantId = `${payload.id}-${payload.color}-${payload.size}`;
    const cartItem = state.cart.find(item =>
        item.variantId === variantId
    );

    if (cartItem) {
      cartItem.quantity += payload.quantity || 1;
    } else {
      state.cart.push({
        ...payload,
        variantId,
        variantText: `${payload.color} / ${payload.size}`,
        imageId: payload.images?.[variantId]?.imageId || (payload.images?.[0]?.image_id)
      });
    }
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
// FIX: Update variant quantity, not product
  updateCartQuantity: (state, payload) => {
    // Calculate Product Stock Counts
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock
      if (stock < qty) {
        return false
      }
      return true
    }

    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {

        }
        return true
      }
    })
    const item = state.cart.find(item => item.variantId === payload.product.variantId);
    if (item) {
      item.quantity = Math.max(1, payload.qty);
    }
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  removeCartItem: (state, payload) => {
    const index = state.cart.indexOf(payload)
    state.cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
