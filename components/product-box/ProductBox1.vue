<template>
  <div :class="['product-container', { 'dark-mode': $store.state.darkMode }]">
    <div class="product_wrappers_one">
      <div class="thumb">
        <nuxt-link :to="{ path: '/product/' + product.id }" class="image">
          <img
              :alt="product.title"
              :src="getImageUrl(product.images[0]?.src, product.images[0]?.image_id)"
          />
          <img
              :alt="product.title"
              :src="getImageUrl(product.images[1]?.src, product.images[1]?.image_id)"
              class="hover-image"
          />
        </nuxt-link>
        <span class="badges">
          <span v-if="product.new" class="new">new</span>
          <span v-else-if="product.hot" class="hot">hot</span>
          <span v-else class=""></span>
        </span>
        <div class="actions">
          <button
              class="action wishlist"
              title="Wishlist"
              @click="addToWishlist(product)"
          >
            <i class="far fa-heart"></i>
          </button>
        </div>
        <button
            class="add-to-cart offcanvas-toggle"
            title="Add To Cart"
            @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>

      <div class="content">
        <h5 class="title text-capitalize">
          <nuxt-link :to="{ path: '/product/' + product.id }">{{
              product.title
            }}
          </nuxt-link>
        </h5>
        <h5 class="price">
          <h5 v-if="product.discount" class="new"
          >${{ discountedPrice(product) }}</h5
          >
          <h5 v-else class="new">${{ product.price }}</h5>
        </h5>
      </div>

      <!-- Modal Area Start-->
      <div>
        <b-modal
            id="product_slider_one"
            ref="product-details-popup"
            centered
            class="product_one_modal_top"
            hide-footer
            title="Using Component Methods"
            :class="{ 'dark-modal': isDarkMode }"
        >
          <template #modal-header="{ close }">
            <button
                class="close close_modal_icon"
                type="button"
                @click="close()"
            >
              <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
          </template>

          <div>
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                <div class="products_modal_sliders">
                  <div ref="mySwiper" v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                      <div
                          v-for="(imag, index) in product.images"
                          :key="index"
                          class="swiper-slide"
                      >
                        <img
                            :id="imag.image_id"
                            :src="getImageUrl(imag.src)"
                            alt="imag.alt"
                            class="img-fluid bg-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-6 col-sm-12 col-12">
                <div class="modal_product_content_one">
                  <h3 class="text-capitalize">{{ product.title }}</h3>
                  <div v-if="product.rating == 5" class="reviews_rating">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                  </div>
                  <div v-else-if="product.rating == 4" class="reviews_rating">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div v-else-if="product.rating == 3" class="reviews_rating">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div v-else-if="product.rating == 2" class="reviews_rating">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div v-else-if="product.rating == 1" class="reviews_rating">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div v-else class="product-review">
                    <span>No Rating</span>
                  </div>

                  <h4 v-if="product.discount">
                    ${{ discountedPrice(product) }}
                    <del>${{ product.price }}</del>
                  </h4>
                  <h4 v-else>${{ product.price }}</h4>

                  <p>{{ product.description }}</p>
                  <div class="variable-single-item">
                    <span>Color</span>
                    <ul class="color-variant d-flex">
                      <li
                          v-for="(variant, variantIndex) in Color(
                          product.variants
                        )"
                          :key="variantIndex"
                          v-bind:class="{ active: activeColor == variant }"
                      >
                        <a
                            :class="[variant]"
                            v-bind:style="{ 'background-color': variant }"
                            @click="
                            sizeVariant(
                              product.variants[variantIndex].image_id,
                              variantIndex,
                              variant
                            )
                          "
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <form id="product_count_form_one">
                    <div class="product_count_one">
                      <b-form-spinbutton
                          id="sb-inline"
                          v-model="quantity"
                          class="border-0"
                          inline
                          max="100"
                          min="1"
                      ></b-form-spinbutton>
                      <a
                          class="theme-btn-one btn-black-overlay btn_sm"
                          href="javascript:void(0)"
                          @click="addToCart(product)"
                      >Add To Cart</a
                      >
                    </div>
                  </form>
                  <div class="modal_share_icons_one">
                    <h4>SHARE THIS PRODUCT</h4>
                    <div class="posted_icons_one">
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                      <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#!"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
      <!-- Modal Area End-->
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ProductBox1",
  props: ["product", "index"],

  data() {
    return {
      // Product Quanity Increment/ Decrement Data
      quantity: 1,

      imageSrc: "",
      cartProduct: {},
      dismissSecs: 3,
      dismissCountDown: 0,

      activeColor: "",
      selectedSize: '',
      selectedColor: '',
      showQuickOptions: false,
      qty: "",
      size: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.state.darkMode;
    },
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),

    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // For displaying default color and size on pageload
    this.uniqColor = this.product.variants[0].color;
    this.sizeVariant(this.product.variants[0].image_id);
    // Active default color
    this.activeColor = this.uniqColor;
    this.changeSizeVariant(this.product.variants[0].size);
  },

  methods: {
    getImageUrl(path) {
      if (!path) return '';
      if (path.startsWith('http')) {
        return path;
      }
      return require("@/assets/img/product-image/" + path);
    },

    addToCart(product) {
      if (!this.selectedSize && this.product.variants?.length > 0) {
        this.$toast.warning('Please select size!');
        this.showQuickOptions = true;
        return;
      }

      const variant = this.product.variants?.find(v =>
          v.size === this.selectedSize &&
          v.color === this.selectedColor
      ) || this.product.variants?.[0] || {};

      const cartItem = {
        ...product,
        quantity: this.quantity,
        color: variant.color || this.selectedColor || '',
        size: variant.size || this.selectedSize || '',
        imageId: variant.image_id || (product.images?.[0]?.image_id),
        variantId: `${product.id}-${variant.color || this.selectedColor || ''}-${variant.size || this.selectedSize || ''}`
      };

      this.$store.dispatch('cart/addToCart', cartItem);
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToWishlist", product);
    },
    addToCompare: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToCompare", product);
    },
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    changeSizeVariant(variant) {
      this.selectedSize = variant;
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    sizeVariant(id, slideId, color) {
      this.size = [];
      this.activeColor = color;
      this.product.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size);
        }
      });
    },
  },
};
</script>

<style scoped>
/* Base Variables */
.product_wrappers_one {
  --card-bg: #ffffff;
  --card-bg-dark: #2a2a2a;
  --text-color: #333333;
  --text-color-dark: #f0f0f0;
  --border-color: #e0e0e0;
  --border-color-dark: #444444;
  --price-color: #000000;
  --price-color-dark: #ffffff;
  --action-icon-color: #555555;
  --action-icon-color-dark: #cccccc;
  --action-bg: #f5f5f5;
  --action-bg-dark: #3a3a3a;
  --btn-bg: #014dd1;
  --btn-bg-dark: #3a7bd5;
  --btn-text: #ffffff;
  --content-bg: #ffffff;
  --content-bg-dark: #2d2d2d;
  --badge-new: #4CAF50;
  --badge-hot: #F44336;
  --badge-text: #ffffff;
}

/* Product Card Styles */
.product_wrappers_one {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  height: 100%;
}

.dark-mode .product_wrappers_one {
  background-color: var(--card-bg-dark);
  border-color: var(--border-color-dark);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Thumbnail Area */
.thumb {
  position: relative;
  overflow: hidden;
  padding: 15px;
}

/* Badges */
.badges {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
}

.badges span {
  display: block;
  padding: 3px 10px;
  border-radius: 3px;
  color: var(--badge-text);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.badges .new {
  background-color: var(--badge-new);
}

.badges .hot {
  background-color: var(--badge-hot);
}

/* Action Buttons */
.actions {
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
}

.actions .action {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--action-bg);
  color: var(--action-icon-color);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dark-mode .actions .action {
  background-color: var(--action-bg-dark);
  color: var(--action-icon-color-dark);
}

.actions .action:hover {
  background-color: var(--btn-bg);
  color: var(--btn-text);
  transform: scale(1.1);
}

/* Content Area */
.content {
  padding: 15px;
  background-color: var(--content-bg);
  border-top: 1px solid var(--border-color);
}

.dark-mode .content {
  background-color: var(--content-bg-dark);
  border-color: var(--border-color-dark);
}

.title a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dark-mode .title a {
  color: var(--text-color-dark);
}

.price .new {
  color: var(--price-color);
  font-weight: 600;
  font-size: 18px;
}

.dark-mode .price .new {
  color: var(--price-color-dark);
}

/* Add to Cart Button */
.add-to-cart {
  width: calc(100% - 30px);
  margin: 0 15px 15px;
  padding: 10px;
  background-color: var(--btn-bg);
  color: var(--btn-text);
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dark-mode .add-to-cart {
  background-color: var(--btn-bg-dark);
}

.add-to-cart:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Image Hover Effects */
.image img {
  transition: all 0.3s ease;
  width: 100%;
  height: auto;
}

.hover-image {
  position: absolute;
  top: 15px;
  left: 15px;
  opacity: 0;
}

.image:hover .hover-image {
  opacity: 1;
}

.image:hover img:first-child {
  opacity: 0;
}

</style>