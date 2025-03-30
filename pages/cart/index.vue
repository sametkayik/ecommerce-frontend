<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
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

    <!-- Cart-Area -->
    <section id="cart_area_one" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc border-bottom-0">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Cart Table Head -->
                  <thead>
                  <tr>
                    <th class="product_remove">Remove</th>
                    <th class="product_thumb">Image</th>
                    <th class="product_name">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product_quantity">Quantity</th>
                    <th class="product_total">Total</th>
                  </tr>
                  </thead>
                  <!-- End Cart Table Head -->
                  <tbody v-if="cart.length">
                  <!-- Start Cart Single Item-->
                  <tr v-for="(item, index) in cart" :key="item.variantId || index">
                    <td class="product_remove">
                      <button class="bg-transparent remove-btn" @click="removeCartItem(item)">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="product_thumb">
                      <nuxt-link :to="{ path: '/product/' + item.id }">
                        <img :src="getVariantImage(item)" alt="img"/>
                      </nuxt-link>
                    </td>
                    <td class="product_name">
                      <nuxt-link :to="{ path: '/product/' + item.id }">{{ item.title }}</nuxt-link>
                      <div v-if="item.color || item.size" class="variant-info">
                        <span v-if="item.color" :style="{ backgroundColor: item.color }" class="color-badge"></span>
                        <span v-if="item.size">Size: {{ item.size }}</span>
                      </div>
                    </td>
                    <td class="product-price">${{ discountedPrice(item).toFixed(2) }}</td>
                    <td class="product_quantity">
                      <label>Quantity</label>
                      <input v-model.number="item.quantity" max="100" min="1" type="number"
                             @change="updateCartItem(item)">
                    </td>
                    <td class="product_total">${{ (discountedPrice(item) * item.quantity).toFixed(2) }}</td>
                  </tr>
                  <!-- End Cart Single Item-->
                  </tbody>
                  <tbody v-else>
                  <tr>
                    <td class="border-0">No Item found!</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="coupon_code left" data-aos="fade-up" data-aos-delay="200">
              <h3>Coupon</h3>
              <div class="coupon_inner">
                <p>Enter your coupon code if you have one!</p>
                <input
                    v-model="couponCode"
                    class="mb-2"
                    placeholder="Coupon code"
                    type="text"
                    :disabled="couponApplied"
                />
                <button
                    v-if="!couponApplied"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    type="button"
                    @click="applyCoupon"
                >
                  Apply coupon
                </button>
                <button
                    v-else
                    class="theme-btn-one btn-black-overlay btn_sm"
                    type="button"
                    @click="removeCoupon"
                >
                  Remove coupon
                </button>
                <p v-if="couponError" class="text-danger mt-2">{{ couponError }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="coupon_code right" data-aos="fade-up" data-aos-delay="400">
              <h3>Cart Total</h3>
              <div class="coupon_inner">
                <div class="cart_subtotal">
                  <p>Subtotal</p>
                  <p class="cart_amount">${{ cartTotal.toFixed(2) }}</p>
                </div>
                <div v-if="couponApplied" class="cart_subtotal">
                  <p>Discount ({{ couponDiscount }}%)</p>
                  <p class="cart_amount text-danger">- ${{ discountAmount }}</p>
                </div>
                <div v-if="couponApplied" class="cart_subtotal" style="color:blue;">
                  <p>Discounted Price:</p>
                  <p class="cart_amount">${{ (cartTotal - discountAmount).toFixed(2) }}</p>
                </div>
                <div class="cart_subtotal">
                  <p>Shipping</p>
                  <p class="cart_amount" style="color:orange;"> $15.00</p>
                </div>
                <div class="cart_subtotal">
                  <p>Total</p>
                  <p class="cart_amount" style="color:green">${{ grandTotal }}</p>
                </div>
                <div class="checkout_btn">
                  <nuxt-link class="theme-btn-one btn-black-overlay btn_sm" to="/my-account/checkout-1">Proceed to
                    Checkout
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "cart",

  data() {
    return {
      title: "Cart",
      couponCode: '',
      couponApplied: false,
      couponDiscount: 0,
      couponError: '',
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Cart",
          to: "/cart",
        },
      ],

      // Product Quanity Increment/ Decrement Data
      quantity: 1,
    };
  },

  computed: {
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
    }),
    grandTotal() {
      const shipping = 15.00;
      const totalBeforeDiscount = this.cartTotal + shipping;
      const discountAmount = this.couponApplied ? (totalBeforeDiscount * this.couponDiscount / 100) : 0;
      return (totalBeforeDiscount - discountAmount).toFixed(2);
    },
    discountAmount() {
      const shipping = 15.00;
      const totalBeforeDiscount = this.cartTotal;
      return this.couponApplied ? (totalBeforeDiscount * this.couponDiscount / 100).toFixed(2) : 0;
    }
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
  },
  methods: {
    async applyCoupon() {
      if (!this.couponCode) {
        this.couponError = 'Please enter a coupon code';
        return;
      }

      try {
        const response = await this.$axios.get(`http://localhost:44393/api/coupon/${this.couponCode}`);

        if (response.data.isSuccess) {
          this.$store.dispatch('cart/applyCoupon', response.data.result.discountAmount);
          this.couponApplied = true;
          this.couponDiscount = response.data.result.discountAmount;
          this.couponError = '';

        } else {
          this.couponApplied = false;
          this.couponError = 'Invalid coupon code';

        }
      } catch (error) {
        this.couponApplied = false;
        this.couponError = 'Error applying coupon';

        console.error('Coupon error:', error);
      }
    },

    removeCoupon() {
      this.$store.dispatch('cart/removeCoupon');
      this.couponApplied = false;
      this.couponDiscount = 0;
      this.couponCode = '';

    },
    getVariantImage(item) {
      if (item.imageId && item.images) {
        const variantImage = item.images.find(img => img.image_id === item.imageId);
        if (variantImage) return this.getImageUrl(variantImage.src);
      }
      return this.getImageUrl(item.images[0].src);
    },

    updateCartItem(item) {
      this.$store.dispatch('cart/updateCartQuantity', {
        product: item,
        qty: item.quantity
      });
    },
    discountedPrice(product) {
      const price = product.price - (product.price * (product.discount || 0) / 100);
      return Math.round(price * 100) / 100; // 2 ondalık basamağa yuvarla
    },
    getImageUrl(path) {
      if (path.startsWith('http')) {
        return path;
      }
      return require("@/assets/img/product-image/" + path);
    },
    // For Delete/Remove Product Item
    removeCartItem: function (product) {
      this.$store.dispatch("cart/removeCartItem", product);
    },
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cart page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>
<style scoped>
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

.product_quantity input {
  width: 60px;
  padding: 5px;
  text-align: center;
}

.remove-btn {
  border: none;
  cursor: pointer;
}
</style>