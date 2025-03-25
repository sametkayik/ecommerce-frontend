<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Shop</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Single Area -->
    <section id="product_single_three" class="ptb-100">
      <div class="container">
        <div class="row area_boxed">
          <div class="col-lg-4">
            <div class="product_single_one_img">
              <swiper
                class="swiper product-single-2-slider"
                :options="swiperOption"
              >
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/1.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/2.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/3.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/4.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/5.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/6.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/7.png')"
                    alt="img"
                  />
                </swiper-slide>

                <div
                  class="swiper-button-prev swiper-button-white"
                  slot="button-prev"
                ></div>
                <div
                  class="swiper-button-next swiper-button-white"
                  slot="button-next"
                ></div>
              </swiper>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="product_details_right_one">
              <div class="modal_product_content_one">
                <h3 class="text-capitalize">{{ getDetail.title }}</h3>

                <div v-if="getDetail.rating == 5" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <span>(5 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 4" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <span>(4 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 3" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(3 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 2" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(2 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 1" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(1 Customer Review)</span>
                </div>
                <div v-else class="product-review">
                  <span>No Rating</span>
                </div>

                <h4 v-if="getDetail.discount">
                  ${{ discountedPrice(getDetail) }}
                  <del>${{ getDetail.price }}</del>
                </h4>
                <h4 v-else>${{ getDetail.price }}</h4>
                <p>
                  Standard dummy text ever since the 1500s, standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen. Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Curabitur
                  non nulla sit amet nisl tempus convallis quis ac lectus. Proin
                  eget tortor risus. Vivamus magna,
                </p>
                <p>
                  lacinia eget consectetur sed, convallis at tellus. Vestibulum
                  ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae.
                </p>
                <ul class="list_three_pro">
                  <li>
                    <span>1.</span> Lorem Ipsum Dolor Sit Amet Consectetur
                    Adipisicing Elit.
                  </li>
                  <li>
                    <span>2.</span>Lorem Ipsum Dolor Sit Amet Consectetur
                    Adipisicing.
                  </li>
                  <li>
                    <span>3.</span>Lorem Ipsum Dolor Sit Amet Consectetur Adipi.
                  </li>
                </ul>
                <form id="product_count_form_two">
                  <div class="product_count_one">
                    <b-form-spinbutton
                      id="sb-inline"
                      v-model="quantity"
                      inline
                      class="border-0"
                    ></b-form-spinbutton>
                  </div>
                </form>
                <div class="variable-single-item">
                  <div class="product-variable-color">
                    <span class="align_text_color">Color:</span>
                    <label for="modal-product-color-red">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-red"
                        class="color-select"
                        type="radio"
                        checked=""
                      />
                      <span class="product-color-red"></span>
                    </label>
                    <label for="modal-product-color-green">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-green"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-green"></span>
                    </label>

                    <label for="modal-product-color-blue">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-blue"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-blue"></span>
                    </label>
                  </div>
                </div>

                <div class="product_details_cat">
                  <ul>
                    <li>Category:</li>
                    <li><a href="#!">Home,</a></li>
                    <li><a href="#!">Bed,</a></li>
                    <li><a href="#!">Sofa</a></li>
                  </ul>
                </div>
                <div class="product_details_cat product_details_bor">
                  <ul>
                    <li>Tags:</li>
                    <li><a href="#!">Home,</a></li>
                    <li><a href="#!">Furniture,</a></li>
                    <li><a href="#!">Sofa</a></li>
                  </ul>
                </div>

                <div class="links_Product_areas area_custom_details">
                  <ul>
                    <li>
                      <a href="#!" class="action wishlist" title="Wishlist"
                        ><i class="far fa-heart"></i>Add To Wishlist</a
                      >
                    </li>
                    <li>
                      <a href="#!" class="action compare" title="Compare"
                        ><i class="fas fa-exchange-alt"></i>Add To Compare</a
                      >
                    </li>
                    <li>
                      <a
                        href="#!"
                        class="theme-btn-one btn-black-overlay btn_sm"
                        >Add To Cart</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="product_detail_socials d-flex align-items-center">
                  <h6>Share:</h6>
                  <ul class="d-flex align-items-center">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-pinterest-p"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_details_tabs">
              <b-tabs>
                <b-tab title="Description" active id="description">
                  <div class="product_description">
                    <p>
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Vestibulum ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Sed porttitor lectus nibh.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Sed porttitor lectus nibh. Donec
                      sollicitudin molestie malesuada. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem.
                    </p>
                    <ul>
                      <li>Vivamus magna justo, lacinia eget consectetur sed</li>
                      <li>Curabitur aliquet quam id dui posuere blandit</li>
                      <li>
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar
                      </li>
                    </ul>
                    <p>
                      Donec sollicitudin molestie malesuada. Cras ultricies
                      ligula sed magna dictum porta. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Nulla porttitor
                      accumsan tincidunt. Cras ultricies ligula sed magna dictum
                      porta. Curabitur arcu erat, accumsan id imperdiet et,
                      Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. porttitor at
                      sem. Quisque velit nisi, pretium ut lacinia in, elementum
                      id enim.
                    </p>
                  </div>
                </b-tab>

                <b-tab title="Additional Information" id="additional">
                  <div class="product_additional">
                    <ul>
                      <li>Weight: <span>400 g</span></li>
                      <li>Dimensions: <span>10 x 10 x 15 cm</span></li>
                      <li>
                        Materials: <span> 60% cotton, 40% polyester</span>
                      </li>
                      <li>
                        Other Info:
                        <span>
                          American heirloom jean shorts pug seitan
                          letterpress</span
                        >
                      </li>
                    </ul>
                  </div>
                </b-tab>

                <b-tab title="Reviews" id="review">
                  <div class="product_reviews">
                    <ul>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user1.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Replay</a>
                              <a href="#!" class="">Report</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user2.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Replay</a>
                              <a href="#!" class="">Report</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user3.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Replay</a>
                              <a href="#!" class="">Report</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RelatedProducts :productType="productType" :productId="productId" />

    <!-- Instagram Arae -->
    <InstagramArea />
  </div>
</template>
  
  <script>
import ProductBox1 from "../../components/product-box/ProductBox1";
import InstagramArea from "../../components/instagram/InstagramArea";
import RelatedProducts from "~/components/widgets/RelatedProducts";

export default {
  name: "product-single-2",
  components: {
    ProductBox1,
    InstagramArea,
    RelatedProducts,
  },
  data() {
    return {
      title: this.$route.params.slug,

      // Product details Popup slider
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        mousewheel: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
      },

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Product Single",
          to: "/product",
        },
      ],

      // Product Quanity Increment/ Decrement Data
      quantity: 1,

      cartProduct: {},
      compareProduct: {},

      productType: "",
      productId: "",
    };
  },
  computed: {
    getDetail: function () {
      return this.$store.getters["products/getProductById"](1);
    },
  },
  mounted() {
    this.relatedProducts();

    // For scroll page top for every Route
    window.scrollTo(0, 0);
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/img/product-image/" + path);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    // add to cart
    addToCart: function (product, qty) {
      product.quantity = qty || 1;
      this.$store.dispatch("cart/addToCart", product);
    },
    // add to wishlist
    addToWishlist: function (product) {
      this.$store.dispatch("products/addToWishlist", product);
    },
    // add to compare
    addToCompare: function (product) {
      this.$store.dispatch("products/addToCompare", product);
    },
    // Related Product Display
    relatedProducts() {
      this.productType = this.getDetail.type;
      this.productId = this.getDetail.id;
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
          content: "Shop page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>