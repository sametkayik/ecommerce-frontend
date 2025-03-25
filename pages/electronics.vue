<template>
  <div class="home-page">

    <!-- Electronics_Banner Arae -->
    <section id="electronics_banner">
      <carousel class="electronics_slider_box" :autoplay="true" :loop="true" :nav="true" :dots="false" :smartSpeed="1000" :margin="30"
                :responsive="{0:{items:1},600:{items:1},992:{items:1},1200:{items:1}}">
        <div v-for="sliderItem in sliderItems" :key="sliderItem.id" class="electronics_slider background_bg" v-bind:style="{ 'background-image': `url(${sliderItem.imagepath})` }">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="electronics_slider_content">
                  <h5>{{sliderItem.subTitle}}</h5>
                  <h2>{{sliderItem.title1}} <span>{{sliderItem.title2}}</span></h2>
                  <h4>{{sliderItem.description}}</h4>
                  <nuxt-link to="/shop/shop-2" class="theme-btn-one bg-black btn_sm">Shop Now</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </section>

    <!-- Electronics_Banner_Bottom Arae -->
    <section id="electronics_banner_bottom" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="el_banner_bottom el-ban-bottom-left">
                        <nuxt-link to="/shop">
                          <img :src="require('@/assets/img/electronics/common/offer1.jpg')" alt="img">
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="el_banner_bottom">
                        <nuxt-link to="/shop">
                          <img :src="require('@/assets/img/electronics/common/offer2.jpg')" alt="img">
                        </nuxt-link>
                    </div>
                    <div class="el_banner_bottom">
                        <nuxt-link to="/shop">
                          <img :src="require('@/assets/img/electronics/common/offer3.jpg')" alt="img">
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="el_feature_wrappers">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3 col-12">
                        <div class="el_feature_box">
                            <img :src="require('@/assets/img/electronics/icon/car.png')" alt="img">
                            <div class="el_feature_text">
                                <h3>Free Shipping</h3>
                                <p>On all orders over $75.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-12">
                        <div class="el_feature_box">
                            <img :src="require('@/assets/img/electronics/icon/world.png')" alt="img">
                            <div class="el_feature_text">
                                <h3>Free Returns</h3>
                                <p>Returns are free within 9 days</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-12">
                        <div class="el_feature_box">
                            <img :src="require('@/assets/img/electronics/icon/lock.png')" alt="img">
                            <div class="el_feature_text">
                                <h3>100% Payment Secure</h3>
                                <p>Your payment are safe with us.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-12">
                        <div class="el_feature_box">
                            <img :src="require('@/assets/img/electronics/icon/phone.png')" alt="img">
                            <div class="el_feature_text">
                                <h3>Support 24/7</h3>
                                <p>Contact us 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <!-- Top Product Area -->
    <section id="electronics_top_product" class="pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="left_heading_three position-absolute">
                        <h2>Top Product</h2>
                    </div>
                </div>
            </div>

            <b-tabs class="hot-product-area-tabs electronics-product-tabs tabs_right_button">
                <b-tab
                  :title="collection"
                  v-for="(collection,index) in category"
                  :key="index"
                  class="row"
                >
                
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(product,index) in getCategoryProduct(collection)" :key="index">
                    <ProductBox4 :product="product" :index="index" @showalert="alert" @alertseconds="alert" />
                  </div>
                </b-tab>
              </b-tabs>
        </div>
    </section>

    <!--Promotion Banner Arae -->
    <section id="promotion_banner" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="elec_promo_text">
                        <h2>DOLBY ATMOS <br> SOUND FEATURE</h2>
                        <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <div class="elec_promo_icon">
                            <div class="icon_promo_item">
                                <i class="fab fa-bluetooth-b"></i>
                                <p>Bluetooth Enabled device</p>
                            </div>
                            <div class="icon_promo_item">
                                <i class="fas fa-wifi"></i>
                                <p>Wireless Connections</p>
                            </div>
                            <div class="icon_promo_item">
                                <i class="fas fa-battery-half"></i>
                                <p>Rechargeable Battery</p>
                            </div>
                            <div class="icon_promo_item">
                                <i class="fas fa-volume-up"></i>
                                <p>Surround Sound System</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="promotion_img">
                        <img :src="require('@/assets/img/electronics/common/promotion.png')" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--Weekly Deal Product Arae -->
    <section id="elce_weekly_deal" class="ptb-100 slider_arrows_on">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left_heading_three">
                        <h2>Weekly Deal Product</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <swiper class="swiper todays_slider position-relative" :options="swiperOption">
                        <swiper-slide v-for="(product,index) in products" :key="index">
                            <ProductBox4 :product="product" :index="index" @showalert="alert" @alertseconds="alert" />
                        </swiper-slide>
    
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    </swiper>
                </div>          
            </div>
        </div>
    </section>

    <!-- Instagram Arae -->
    <InstagramAreaElectronics />

    <!-- Add to cart Alert / Notification  -->
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert>
    <!-- Add to cart Alert / Notification  -->

    <!-- Add to wishlist / wishlist Notification  -->
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert>
    <!-- Add to wishlist / wishlist Notification  -->

    <!-- Add to Compare / Compare Notification  -->
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert>
    <!-- Add to Compare / Compare Notification  -->

  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductBox4 from '~/components/product-box/ProductBox4'
import InstagramAreaElectronics from '../components/instagram/InstagramAreaElectronics'
import carousel from 'vue-owl-carousel'

export default {
    name: 'Electronics',
    components: {
        ProductBox4,
        InstagramAreaElectronics,
        carousel
    },

    data() {
      return { 
        title: 'Electronics Home',

        // Furniture Banner Slider Items 
        sliderItems: [
            {
                id: 1,
                imagepath: require('@/assets/img/electronics/banner/banner1.png'),
                title1: 'Collection',
                title2: 'Headphone',
                subTitle: 'NEW TRANDING',
                description: 'Introducing Apple Watch Series 4'
            },
            {
                id: 2,
                imagepath: require('@/assets/img/electronics/banner/banner2.png'),
                title1: 'Collection',
                title2: 'Headphone',
                subTitle: 'NEW TRANDING',
                description: 'Anti-Falling Of Design Sweatproof'
            },
            {
                id: 3,
                imagepath: require('@/assets/img/electronics/banner/banner3.png'),
                title1: 'Collection',
                title2: 'Headphone',
                subTitle: 'NEW TRANDING',
                description: 'Anti-Falling Of Design Sweatproof.'
            }
        ],

        products: [],
        category: [],
        cartproduct: {},

        compareproduct: {},

        dismissCountDown: 0,

        // Todays Slider options 
        swiperOption: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loop: false,
            mousewheel: false,
            keyboard: {
                enabled: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            },
            autoplay: false,
        },

      }
    },
    computed: {
        ...mapState({
            productslist: state => state.products.productslist
        }),
    },
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)

        this.productsArray()
    },
    methods: {
        productsArray: function () {
            this.productslist.map((item) => {
                if (item.type === 'electronics') {
                this.products.push(item)
                item.collection.map((i) => {
                        const index = this.category.indexOf(i)
                        if (index === -1) this.category.push(i)
                    })
                }
            })
        },
        // For Product Tab
        getCategoryProduct(collection) {
            return this.products.filter((item) => {
                if (item.collection.find(i => i === collection)) {
                    return item
                }
            })
        },

        // Product added Alert / notificaion 
        alert(item) {
            this.dismissCountDown = item
        },
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Electronics Home page - AndShop Ecommerce Vue js, Nuxt js Template '
          }
        ]
      }
    }
}
</script>