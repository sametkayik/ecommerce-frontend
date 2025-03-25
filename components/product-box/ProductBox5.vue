<template>
  <div>
    PRODUCT 5
    <div class="product_box text-center">
      <div class="product_img">
        <nuxt-link :to="{ path: '/product/'+product.id }">
          <img
              :alt="product.title"
              :src="getImageUrl(imageSrc ? imageSrc : product.images[0].src)"
          />
        </nuxt-link>
        <div class="product_action_box">
          <ul class="list_none pr_action_btn">
            <li>
              <button
                  title="Wishlist"
                  @click="addToWishlist(product)"><i class="far fa-heart"></i>
              </button>
            </li>

          </ul>
        </div>
      </div>
      <div class="product_info">
        <h5 class="product_title text-capitalize">
          <nuxt-link :to="{ path: '/product/'+product.id }">{{ product.title }}</nuxt-link>
        </h5>
        <div class="product_price">
          <span class="price">${{ discountedPrice(product) }}</span>
          <del>${{ product.price }}</del>
        </div>
        <div class="rating_wrap">
          <div class="rating">
            <div v-if="product.rating==5" class="reviews_rating">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
            </div>
            <div v-else-if="product.rating==4" class="reviews_rating">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star"></i>
            </div>
            <div v-else-if="product.rating==3" class="reviews_rating">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div v-else-if="product.rating==2" class="reviews_rating">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div v-else-if="product.rating==1" class="reviews_rating">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div v-else class="product-review">
              <span>No Rating</span>
            </div>
          </div>
          <span class="rating_num">(21)</span>
        </div>
        <div class="add-to-cart">
          <button
              class="theme-btn-one bg-black btn_sm offcanvas-toggle"
              title="Add To Cart"
              @click="addToCart(product)">
            <i class="fas fa-cart-arrow-down"></i> Add To Cart
          </button>
        </div>
      </div>
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
                    <div v-for="(imag,index) in product.images" :key="index" class="swiper-slide">
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
                <h3 class=" text-capitalize">{{ product.title }}</h3>
                <div v-if="product.rating==5" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>

                </div>
                <div v-else-if="product.rating==4" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else-if="product.rating==3" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else-if="product.rating==2" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else-if="product.rating==1" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else class="product-review">
                  <span>No Rating</span>
                </div>

                <h4 v-if="product.discount">${{ discountedPrice(product) }}
                  <del>${{ product.price }}</del>
                </h4>
                <h4 v-else>${{ product.price }}</h4>

                <p>{{ product.description }}</p>
                <div class="variable-single-item">
                  <span>Color</span>
                  <ul class="color-variant d-flex">
                    <li
                        v-for="(variant,variantIndex) in Color(product.variants)"
                        :key="variantIndex"
                        v-bind:class="{ active: activeColor == variant}"
                    >
                      <a
                          :class="[variant]"
                          v-bind:style="{ 'background-color' : variant}"
                          @click="sizeVariant(product.variants[variantIndex].image_id, variantIndex, variant)"
                      ></a>
                    </li>
                  </ul>
                </div>
                <form id="product_count_form_one">
                  <div class="product_count_one">
                    <b-form-spinbutton
                        id="sb-inline"
                        v-model="quantity" class="border-0"
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
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'ProductBox5',
  props: ['product', 'index'],

  data() {
    return {
      quantity: 1,
      imageSrc: '',
      cartProduct: {},
      dismissSecs: 3,
      dismissCountDown: 0,
      activeColor: '',
      selectedSize: '',
      qty: "",
      size: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true
      },
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // For displaying default color and size on pageload
    this.uniqColor = this.product.variants[0].color
    this.sizeVariant(this.product.variants[0].image_id)
    // Active default color
    this.activeColor = this.uniqColor
    this.changeSizeVariant(this.product.variants[0].size)
  },

  methods: {
    toggleModal() {
      this.$refs['product-details-popup'].toggle('#toggle-btn');
    },
    getImageUrl(path) {
      if (path.startsWith('http')) {
        return path;
      }
      return require("@/assets/img/product-image/" + path);
    },
    addToCart: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.cartProduct = product;
      this.$emit('showalert', this.dismissCountDown);
      this.$store.dispatch('cart/addToCart', product);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit('showalert', this.dismissCountDown)
      this.$store.dispatch('products/addToWishlist', product)
    },
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    changeSizeVariant(variant) {
      this.selectedSize = variant
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false)
    },
    sizeVariant(id, slideId, color) {
      // this.swiper.slideTo(slideId, 1000, false)
      this.size = []
      this.activeColor = color
      this.product.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size)
        }
      })
    }

  },
};
</script>