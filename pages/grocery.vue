<template>
  <div class="home-page">
    <!-- Banner Area -->
    <section id="grocery_banner" class="pt-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-12">
            <div class="grocery_banner_img">
              <a href="#!">
                <img
                  :src="require('@/assets/img/grocery/banner/banner1.png')"
                  alt="img"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12">
            <div class="grocery_banner_img">
              <a href="#!">
                <img
                  :src="require('@/assets/img/grocery/banner/banner2.png')"
                  alt="img"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-6 col-12">
                <div class="grocery_banner_img banner_last_img">
                  <a href="#!">
                    <img
                      :src="require('@/assets/img/grocery/banner/banner3.png')"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-6 col-12">
                <div class="grocery_banner_img">
                  <a href="#!">
                    <img
                      :src="require('@/assets/img/grocery/banner/banner4.png')"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Banner Bottom Area -->

    <!-- Top Category Area -->
    <section id="grocery_category_top" class="ptb-100 slider_button_style">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="grocery_heading">
              <h2>Top Categories</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="grocery_categories_slider">
              <carousel
                class="grocery_slider_box"
                :autoplay="true"
                :loop="true"
                :nav="true"
                :dots="false"
                :smartSpeed="1000"
                :margin="30"
                :responsive="{
                  0: { items: 2 },
                  600: { items: 3 },
                  992: { items: 4 },
                  1200: { items: 7 },
                }"
              >
                <div
                  v-for="topCategoriesItem in topCategoriesItems"
                  :key="topCategoriesItem.id"
                  class="grocery_small_item"
                >
                  <a href="#!">
                    <img :src="topCategoriesItem.imagepath" alt="item" />
                    <h4>{{ topCategoriesItem.productName }}</h4>
                    <p>{{ topCategoriesItem.productCount }}</p>
                  </a>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Discount Area -->
    <section id="discount-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="discount_item">
              <a href="#!"
                ><img
                  :src="require('@/assets/img/grocery/offer/top-offer-1.png')"
                  alt="img"
              /></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="discount_item">
              <a href="#!"
                ><img
                  :src="require('@/assets/img/grocery/offer/top-offer-2.png')"
                  alt="img"
              /></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="discount_item">
              <a href="#!"
                ><img
                  :src="require('@/assets/img/grocery/offer/top-offer-3.png')"
                  alt="img"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Featured Product -->
    <section id="grocery_featured_area" class="ptb-100 slider_button_style">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="grocery_heading">
              <h2>Featured products</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="featured_grocery_slider">
              <carousel
                class="featured_slider_box"
                :autoplay="true"
                :loop="true"
                :nav="true"
                :dots="false"
                :smartSpeed="1000"
                :margin="30"
                :responsive="{
                  0: { items: 1 },
                  600: { items: 2 },
                  992: { items: 3 },
                  1200: { items: 5 },
                }"
              >
                <div
                  v-for="featuredItem in featuredItems"
                  :key="featuredItem.id"
                  class="sp_product_item"
                >
                  <div class="sp_product_thumb">
                    <span class="batch">{{ featuredItem.productBatch }}</span>
                    <a href="#!">
                      <img :src="featuredItem.imagepath" alt="img" />
                    </a>
                  </div>
                  <div class="sp_product_content">
                    <div class="rating_sp">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h6>
                      <a
                        href="#!"
                        data-bs-toggle="modal"
                        data-bs-target="#shoppingCartModal"
                        >{{ featuredItem.productName }}</a
                      >
                    </h6>
                    <span class="product_status">{{
                      featuredItem.productStatus
                    }}</span>
                    <div class="sp_cart_wrap">
                      <form id="product_count_form_two">
                        <div class="cart_plus_minus">
                          <b-form-spinbutton
                            id="sb-inline"
                            v-model="quantity"
                            inline
                            class="border-0"
                          ></b-form-spinbutton>
                        </div>
                      </form>
                    </div>
                    <p>{{ featuredItem.productWeight }}</p>
                  </div>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Todays Deails -->
    <section id="todays_deails_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="grocery_heading">
              <h2>Deals of the day</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="grocery_todays_area_left">
              <div class="grocery_todays_count">
                <div id="countdown_grocery">
                  <ul>
                    <Timer date="September 30, 2022" />
                  </ul>
                </div>
              </div>
              <div class="grocery_todays_img">
                <img
                  :src="require('@/assets/img/grocery/product/cat_item10.png')"
                  alt="img"
                />
              </div>
              <div class="grocery_todays_content">
                <h3>Special chana dal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <a href="shop-3.html" class="theme-btn-one bg-black btn_md"
                  >Shop Now</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-6 col-sm-12 col-12">
            <div class="row">
              <div
                v-for="dealProduct in dealProducts"
                :key="dealProduct.id"
                class="col-lg-3 col-md-6 col-sm-6 col-12"
              >
                <div class="sp_product_item">
                  <div class="sp_product_thumb">
                    <span class="batch">{{ dealProduct.productBatch }}</span>
                    <a href="#!">
                      <img :src="dealProduct.imagepath" alt="img" />
                    </a>
                  </div>
                  <div class="sp_product_content">
                    <div class="rating_sp">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h6>
                      <a
                        href="#!"
                        data-bs-toggle="modal"
                        data-bs-target="#shoppingCartModal"
                        >{{ dealProduct.productName }}</a
                      >
                    </h6>
                    <span class="product_status">{{
                      dealProduct.productStatus
                    }}</span>
                    <div class="sp_cart_wrap">
                      <form id="product_count_form_two">
                        <div class="cart_plus_minus">
                          <b-form-spinbutton
                            id="sb-inline"
                            v-model="quantity"
                            inline
                            class="border-0"
                          ></b-form-spinbutton>
                        </div>
                      </form>
                    </div>
                    <p>{{ dealProduct.productWeight }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row display_nones_tabs">
              <div
                v-for="dealProduct in dealProducts"
                :key="dealProduct.id"
                class="col-lg-3 col-md-6 col-sm-6 col-12"
              >
                <div class="sp_product_item">
                  <div class="sp_product_thumb">
                    <span class="batch">{{ dealProduct.productBatch }}</span>
                    <a href="#!">
                      <img :src="dealProduct.imagepath" alt="img" />
                    </a>
                  </div>
                  <div class="sp_product_content">
                    <div class="rating_sp">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h6>
                      <a
                        href="#!"
                        data-bs-toggle="modal"
                        data-bs-target="#shoppingCartModal"
                        >{{ dealProduct.productName }}</a
                      >
                    </h6>
                    <span class="product_status">{{
                      dealProduct.productStatus
                    }}</span>
                    <div class="sp_cart_wrap">
                      <form id="product_count_form_two">
                        <div class="cart_plus_minus">
                          <b-form-spinbutton
                            id="sb-inline"
                            v-model="quantity"
                            inline
                            class="border-0"
                          ></b-form-spinbutton>
                        </div>
                      </form>
                    </div>
                    <p>{{ dealProduct.productWeight }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Cta Area -->
    <section id="grocery_cta_area" class="ptb-100">
      <div class="container">
        <div class="grocery_cat_wrapper">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="grocery_cta_content">
                <h2>
                  Shop your daily goods from the app & enjoy upto 50% discount
                </h2>
                <p>Enter your email address to download the app</p>
                <form action="#">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                    <button class="btn_cta" type="submit">
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="grocery_cta">
                <img
                  :src="require('@/assets/img/grocery/offer/cta.png')"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending Product Area -->
    <section id="grocery_trending_product" class="pb-100 slider_button_style">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="grocery_heading">
              <h2>Trending Product</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="grocery_trending_product">
              <carousel
                class="grocery_trending_slider_box"
                :autoplay="true"
                :loop="true"
                :nav="true"
                :dots="false"
                :smartSpeed="1000"
                :margin="30"
                :responsive="{
                  0: { items: 1 },
                  600: { items: 3 },
                  992: { items: 4 },
                  1200: { items: 7 },
                }"
              >
                <div
                  v-for="topCategoriesItem in topCategoriesItems"
                  :key="topCategoriesItem.id"
                  class="grocery_small_item"
                >
                  <a href="#!">
                    <img :src="topCategoriesItem.imagepath" alt="item" />
                    <h4>{{ topCategoriesItem.productName }}</h4>
                    <p>{{ topCategoriesItem.productCount }}</p>
                  </a>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Area -->
    <section id="grocery_support" class="pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="grcery_support_boxed">
              <img
                :src="require('@/assets/img/grocery/icon/free.svg')"
                alt="icon"
              />
              <div class="support_boxed_grocery_content">
                <h5>Free Delivery</h5>
                <p>For all oders over $100</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="grcery_support_boxed">
              <img
                :src="require('@/assets/img/grocery/icon/refund.svg')"
                alt="icon"
              />
              <div class="support_boxed_grocery_content">
                <h5>Refundable</h5>
                <p>If your item have no damage.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="grcery_support_boxed">
              <img
                :src="require('@/assets/img/grocery/icon/secure.svg')"
                alt="icon"
              />
              <div class="support_boxed_grocery_content">
                <h5>Secure Payment</h5>
                <p>100% secure payment</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="grcery_support_boxed">
              <img
                :src="require('@/assets/img/grocery/icon/support.svg')"
                alt="icon"
              />
              <div class="support_boxed_grocery_content">
                <h5>24/7 Customer Support</h5>
                <p>We have dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Timer from "../components/widgets/Timer";
import carousel from "vue-owl-carousel";

export default {
  name: "Furniture",
  components: {
    Timer,
    carousel,
  },

  data() {
    return {
      // Top categories slider items
      topCategoriesItems: [
        {
          id: 1,
          imagepath: require("@/assets/img/grocery/product/cat_item1.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 2,
          imagepath: require("@/assets/img/grocery/product/cat_item2.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 3,
          imagepath: require("@/assets/img/grocery/product/cat_item3.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 4,
          imagepath: require("@/assets/img/grocery/product/cat_item4.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 5,
          imagepath: require("@/assets/img/grocery/product/cat_item5.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 6,
          imagepath: require("@/assets/img/grocery/product/cat_item6.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 7,
          imagepath: require("@/assets/img/grocery/product/cat_item7.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 8,
          imagepath: require("@/assets/img/grocery/product/cat_item3.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 9,
          imagepath: require("@/assets/img/grocery/product/cat_item4.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 10,
          imagepath: require("@/assets/img/grocery/product/cat_item5.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 11,
          imagepath: require("@/assets/img/grocery/product/cat_item6.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
        {
          id: 12,
          imagepath: require("@/assets/img/grocery/product/cat_item7.png"),
          productName: "Fresh fruit",
          productCount: "51 items",
        },
      ],

      // Featured slider items
      featuredItems: [
        {
          id: 1,
          imagepath: require("@/assets/img/grocery/product/cat_item1.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 2,
          imagepath: require("@/assets/img/grocery/product/cat_item2.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 3,
          imagepath: require("@/assets/img/grocery/product/cat_item3.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 4,
          imagepath: require("@/assets/img/grocery/product/cat_item7.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 5,
          imagepath: require("@/assets/img/grocery/product/cat_item8.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 6,
          imagepath: require("@/assets/img/grocery/product/cat_item9.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 7,
          imagepath: require("@/assets/img/grocery/product/cat_item5.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
      ],

      // Deal Product Items
      dealProducts: [
        {
          id: 1,
          imagepath: require("@/assets/img/grocery/product/cat_item1.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 2,
          imagepath: require("@/assets/img/grocery/product/cat_item1.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 3,
          imagepath: require("@/assets/img/grocery/product/cat_item1.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
        {
          id: 4,
          imagepath: require("@/assets/img/grocery/product/cat_item1.png"),
          productName: "Uncle Orange Vanla Ready Pice",
          productStatus: "IN Stock",
          productBatch: "NEW",
          productWeight: "$1.50 - 1 KG",
        },
      ],
      quantity: 1,
    };
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
  },
  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Grocery Home page - AndShop Ecommerce Vue js, Nuxt js Template ",
        },
      ],
    };
  },
};
</script>