<template>
  <div class="home-page">

    <!-- Banner Area -->
    <section id="furniture_banner">
      <carousel class="furniture_slider_box" :autoplay="true" :loop="true" :nav="false" :dots="true" :smartSpeed="1000" :margin="30" 
                        :responsive="{0:{items:1},600:{items:1},992:{items:1},1200:{items:1}}" >
        <div v-for="sliderItem in sliderItems" :key="sliderItem.id" class="furniture_slider background_bg" v-bind:style="{ 'background-image': `url(${sliderItem.imagepath})` }">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-8 col-sm-12 col-12">
                <div class="furniture_slider_content">
                  <h5>{{sliderItem.subTitle}}</h5>
                  <h2>{{sliderItem.title}}</h2>
                  <p>{{sliderItem.description}}</p>
                  <nuxt-link to="/shop/shop-2" class="theme-btn-one bg-black btn_sm">Shop Now</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </carousel>
    </section>

    <!-- Banner Bottom Area -->
    <section id="furniture_banner_bottom" class="pt-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="furniture_bottom_wrapper">
                        <nuxt-link to="/shop/shop-3" class="hover_effect_furniture">
                            <img :src="require('@/assets/img/furniture/banner/feature1.png')" alt="img">
                        </nuxt-link>
                        <div class="furniture_bottom_content furniture-content-lg">
                            <h5>Outdoor Furniture</h5>
                            <h2>Outdoor Dining <br> Furniture</h2>
                            <nuxt-link to="/shop/shop-3">Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="furniture_bottom_wrapper mb-30">
                        <nuxt-link to="/shop/shop-3" class="hover_effect_furniture">
                            <img :src="require('@/assets/img/furniture/banner/feature2.png')" alt="img">
                        </nuxt-link>
                        <div class="furniture_bottom_content furniture-content-md">
                            <h5>Outdoor Furniture</h5>
                            <h2>Outdoor Dining <br> Furniture</h2>
                            <nuxt-link to="/shop/shop-3">Shop Now</nuxt-link>
                        </div> 
                    </div>
                    <div class="furniture_bottom_wrapper">
                        <nuxt-link to="/shop/shop-3" class="hover_effect_furniture">
                            <img :src="require('@/assets/img/furniture/banner/feature3.png')" alt="img">
                        </nuxt-link>
                        <div class="furniture_bottom_content furniture-content-md">
                            <h5>Outdoor Furniture</h5>
                            <h2>Outdoor Dining <br> Furniture</h2>
                            <nuxt-link to="/shop/shop-3">Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="furniture_bottom_wrapper">
                        <nuxt-link to="/shop/shop-3" class="hover_effect_furniture">
                            <img :src="require('@/assets/img/furniture/banner/feature4.png')" alt="img">
                        </nuxt-link>
                        <div class="furniture_bottom_content furniture-content-md">
                            <h5>Outdoor Furniture</h5>
                            <h2>Outdoor Dining <br> Furniture</h2>
                            <nuxt-link to="/shop/shop-3">Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hot Product Area -->
    <section id="hot_Product_area" class="ptb-100">
        <div class="container">
            <b-tabs class="hot-product-area-tabs">
                <b-tab
                  :title="collection"
                  v-for="(collection,index) in category"
                  :key="index"
                  class="row"
                >
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(product,index) in getCategoryProduct(collection)" :key="index">
                    <ProductBox3 :product="product" :index="index" @showalert="alert" @alertseconds="alert" />
                  </div>
                </b-tab>
              </b-tabs>
        </div>
    </section>

    <!-- Time Count Area -->
    <section id="offer_timer_two">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="offer_time_img_two">
                        <img :src="require('@/assets/img/furniture/common/offer-time.png')" alt="img">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="offer_time_two_Content">
                     <img :src="require('@/assets/img/furniture/common/black.png')" alt="img">
                        <div id="countdown_two">
                            <ul>
                                <Timer date="October 15, 2025" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Popular Product Area -->
    <section id="furniture_popular_product" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center_heading_two">
                        <h2>Popular Product</h2>
                        <span class="heading_border"></span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <swiper class="swiper todays_slider position-relative" :options="swiperOption">
                        <swiper-slide v-for="(product,index) in products" :key="index">
                            <ProductBox3 :product="product" :index="index" @showalert="alert" @alertseconds="alert" />
                        </swiper-slide>
    
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    </swiper>
                </div>          
            </div>
        </div>
    </section>

    <!-- Our Story Area -->
    <section id="furniture_story">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="our_story_content">
                        <h2>Our Story</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem quaerat
                             autem obcaecati nisi dolore reprehenderit fugiat accusamus repellat nihil possimus voluptas ipsa, 
                            asperiores maiores quisquam ipsum necessitatibus sit saepe.</p>
                        <nuxt-link to="/about-us" class="theme-btn-one bg-black btn_md">Read Full Story</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest Blog Arae -->
    <section id="blog_area_two" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center_heading_two">
                        <h2>Blog Post</h2>
                        <span class="heading_border"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="blogItem in blogItems.slice(0,2)" :key="blogItem.id" class="col-lg-6 col-md-6 col-sm-12">
                    <BlogItem3 :blogThumb="blogItem.blogThumb" :blogTitle="blogItem.blogTitle" :blogDescription="blogItem.blogDescription" :blogPublishDate="blogItem.blogPublishDate" />
                </div>
            </div>
        </div>
    </section>

    <!-- Instagram Arae -->
    <InstagramAreaFurniture />

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
import ProductBox3 from '~/components/product-box/ProductBox3'
import Timer from '../components/widgets/Timer'
import InstagramAreaFurniture from '../components/instagram/InstagramAreaFurniture'
import BlogItem3 from '~/components/blog/BlogItem3'
import carousel from 'vue-owl-carousel'

export default {
    name: 'Furniture',
    components: {
        ProductBox3,
        Timer,
        InstagramAreaFurniture,
        BlogItem3,
        carousel
    },

    data() {
      return { 
        title: 'Furniture Home',

        // Furniture Banner Slider Items 
        sliderItems: [
            {
                id: 1,
                imagepath: require('@/assets/img/furniture/banner/banner1.png'),
                title: 'Sofa Collection',
                subTitle: 'NEW TRANDING',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.'
            },
            {
                id: 2,
                imagepath: require('@/assets/img/furniture/banner/banner2.png'),
                title: 'Wardrobe Collection',
                subTitle: 'NEW TRANDING',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.'
            },
            {
                id: 3,
                imagepath: require('@/assets/img/furniture/banner/banner3.png'),
                title: 'Table Collection',
                subTitle: 'NEW TRANDING',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.'
            }
        ],

        blogItems: [
            {
                id: 1,
                blogThumb: require('assets/img/furniture/blog/blog1.jpg'),
                blogTitle: 'This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!',
                blogDescription: 'Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 2,
                blogThumb: require('assets/img/furniture/blog/blog2.jpg'),
                blogTitle: '4 Fresh Ways To Style Leather Shorts For Spring',
                blogDescription: 'We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation',
                blogPublishDate: '29 jan 2018'
            },
            {
                id: 3,
                blogThumb: require('assets/img/blog/post3.png'),
                blogTitle: 'Shopbop Spring Sale Selects All Under Around $100!',
                blogDescription: 'STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 4,
                blogThumb: require('assets/img/blog/post4.png'),
                blogTitle: 'This Made Me Splurge on The Apple Watch',
                blogDescription: 'From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there.',
                blogPublishDate: '21 February 2019'
            },
            {
                id: 5,
                blogThumb: require('assets/img/blog/post5.png'),
                blogTitle: 'This Designer Bronzer Has Even Buyers Splurging!',
                blogDescription: 'Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 6,
                blogThumb: require('assets/img/blog/post6.png'),
                blogTitle: '4 Tips for A Colorful Easter Tablescape',
                blogDescription: 'Spring is all about the colors! Especially after what feels like an endless winter, I catch myself craving more color than usual.',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 7,
                blogThumb: require('assets/img/blog/post7.png'),
                blogTitle: 'Hawaii Couples Trip Guide and Spring Break Faves',
                blogDescription: 'After every trip to Hawaii, I always have a few DMs asking where we stayed, our favorite beaches, etc. Especially with spring break around the corner.',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 8,
                blogThumb: require('assets/img/blog/post8.png'),
                blogTitle: 'If You Struggle To Hit Your Goals, Try This Instead',
                blogDescription: 'This year, instead of setting grand, lofty goals and New Years Resolutions, I realized that I respond better to smaller targets that I can cross',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 9,
                blogThumb: require('assets/img/blog/post9.png'),
                blogTitle: 'The Luxury Winter Accessory That’s Trending Now',
                blogDescription: 'No matter what you spend on your wardrobe, there are three pieces that can always elevate your look – shoes, handbags, and sunglasses.',
                blogPublishDate: '24 February 2021'
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
                    slidesPerView: 3,
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
                if (item.type === 'furniture') {
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
            content: 'Furniture Home page - AndShop Ecommerce Vue js, Nuxt js Template '
          }
        ]
      }
    }
}
</script>