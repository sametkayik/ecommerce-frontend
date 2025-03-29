<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container ">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wishlist-Area -->
    <section id="wishlist_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Wishlist Table Head -->
                  <thead>
                  <tr>
                    <th class="product_remove">Remove</th>
                    <th class="product_thumb">Image</th>
                    <th class="product_name">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product_stock">Stock Status</th>
                    <th class="product_addcart">Add To Cart</th>
                  </tr>
                  </thead>
                  <!-- End Wishlist Table Head -->
                  <tbody v-if="wishlist.length">
                  <!-- Start Wishlist Single Item-->
                  <tr v-for="(item, index) in wishlist" :key="item.variantId || index">
                    <td class="product_remove">
                      <button class="bg-transparent remove-btn" @click="removeWishlistItem(item)">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="product_thumb">
                      <nuxt-link :to="{ path: '/product/' + item.id }">
                        <img :src="getImageUrl(item.images[0].src)" alt="img"/>
                      </nuxt-link>
                    </td>
                    <td class="product_name">
                      <nuxt-link :to="{ path: '/product/' + item.id }">{{ item.title }}</nuxt-link>
                      <div v-if="item.color || item.size" class="variant-info">
                        <span v-if="item.color" :style="{ backgroundColor: item.color }" class="color-badge"></span>
                        <span v-if="item.size">Size: {{ item.size }}</span>
                      </div>
                    </td>
                    <td class="product-price">
                      <span class="fw-bold">${{ discountedPrice(item).toFixed(2) }}</span>
                      <del v-if="item.discount" class="text-danger ms-2">${{ item.price.toFixed(2) }}</del>
                    </td>
                    <td class="product_quantity">
                      <span class="badge bg-success">In Stock</span>
                    </td>
                    <td class="product_total">
                      <button class="theme-btn-one btn-black-overlay btn_sm"
                              @click="addToCart(item)">
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                  <!-- End Wishlist Single Item-->
                  </tbody>
                  <tbody v-else>
                  <tr>
                    <td class="text-center py-5" colspan="6">
                      <div class="empty-wishlist">
                        <i class="far fa-heart fa-3x text-muted mb-3"></i>
                        <h5>Your wishlist is empty</h5>
                        <nuxt-link class="theme-btn-one btn-black-overlay btn_md" to="/shop">
                          Continue Shopping
                        </nuxt-link>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'wishlist',

  data() {
    return {
      title: 'Wishlist',
      breadcrumbItems: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Wishlist',
          to: '/my-account/wishlist'
        }
      ],
      cartProduct: {},
    }
  },

  computed: {
    ...mapGetters({
      wishlist: 'products/wishlistItems',
    }),
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
  },
  mounted() {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    this.$store.commit('products/initializeWishlist', savedWishlist)
    window.scrollTo(0, 0)
  },

  methods: {
    getImageUrl(path) {
      if (path.startsWith('http')) {
        return path;
      }
      return require("@/assets/img/product-image/" + path);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    removeWishlistItem: function (product) {
      this.$store.dispatch('products/removeWishlistItem', product)
    },
    addToCart(product) {
      const variantId = product.variantId || `${product.id}-${product.color}-${product.size}`;

      if (!product.color || !product.size) {
        alert('Varyant bilgileri eksik!');
        return;
      }

      const cartItem = {
        ...product,
        quantity: 1,
        color: product.color,
        size: product.size,
        variantId,
        imageId: product.imageId || (product.images?.[0]?.image_id)
      };
      this.$store.dispatch('cart/addToCart', cartItem);
      this.removeWishlistItem(product);
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Wishlist page - AndShop Ecommerce Vue js, Nuxt js Template'
        }
      ]
    }
  }
}
</script>
<style scoped>

.table_desc {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 15px 10px;
  text-align: left;
  border-bottom: 1px solid #eee;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
}

td {
  padding: 15px 10px;
  vertical-align: middle;
  border-bottom: 1px solid #eee;
}

.product_thumb img {
  max-width: 80px;
  height: auto;
}

.variant-info {
  margin-top: 5px;
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-badge {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #ddd;
}

.remove-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  color: #999;
  font-size: 16px;
}

.remove-btn:hover {
  color: #ff0000;
}

.empty-wishlist {
  padding: 40px 0;
  text-align: center;
}

.empty-wishlist i {
  font-size: 50px;
  margin-bottom: 20px;
  color: #ddd;
}

.empty-wishlist h5 {
  margin-bottom: 15px;
  color: #333;
}
</style>