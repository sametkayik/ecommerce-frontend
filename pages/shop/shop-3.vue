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

    <!-- Shop Main Area -->
    <section id="shop_main_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="product_filter">
              <div class="customs_selects">
                <select class="customs_sel_box" name="product">
                  <option value="Filter">Filter</option>
                  <option value="most_popular">Most Popular</option>
                  <option value="best_seller">Best Seller</option>
                  <option value="tranding">Tranding</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="product_shot">
              <div class="product_shot_title">
                <p>Sort By:</p>
              </div>
              <div class="customs_selects">
                <select class="customs_sel_box" name="product">
                  <option value="popularity">Sort by Popularity</option>
                  <option value="new">Sort by new</option>
                  <option value="low">Price: low to high</option>
                  <option value="high">Price: high to low</option>
                </select>
              </div>
              <div class="product_shot_view">
                <ul>
                  <li>
                    <nuxt-link class="active" to="/shop/shop-3"><i class="fas fa-list"></i></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/shop/shop-2"><i class="fas fa-th-large"></i></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/shop"><i class="fas fa-th"></i></nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(product,index) in shuffleproducts" v-show="setPaginate(index)" :key="index"
               class="col-lg-12 col-md-6 col-sm-6 col-12">
            <ProductBox2 :index="index" :product="product" @alertseconds="alert" @showalert="alert"/>
          </div>

          <!-- pagination start -->
          <div class="col-lg-12">
            <div v-if="shuffleproducts.length > this.paginate" class="product-pagination mb-0">
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current-1)">
                                    <span aria-hidden="true">
                                    <i aria-hidden="true" class="fa fa-chevron-left" style="font-size:10px;"></i>
                                    </span>
                    </a>
                  </li>
                  <li v-for="(page_index, index) in this.pages" :key="index" :class="{'active': page_index == current}"
                      class="page-item">
                    <a
                        class="page-link"
                        href="javascrip:void(0)"
                        @click.prevent="updatePaginate(page_index)"
                    >{{ page_index }}</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current+1)">
                                    <span aria-hidden="true">
                                    <i aria-hidden="true" class="fa fa-chevron-right" style="font-size:10px;"></i>
                                    </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!-- pagination end -->
        </div>
      </div>
    </section>

    <!-- Instagram Arae -->
    <InstagramArea/>

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
import {mapState} from 'vuex'
import ProductBox2 from '~/components/product-box/ProductBox2'
import InstagramArea from '~/components/instagram/InstagramArea'

export default {
  name: 'shop-list-view',
  components: {
    ProductBox2,
    InstagramArea
  },
  data() {
    return {
      title: 'Shop',
      dismissCountDown: 0,

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Shop',
          to: '/shop/shop-3'
        }
      ],

      // Paginaion
      current: 1,
      paginate: 12,
      paginateRange: 3,
      pages: [],
      paginates: '',

    }
  },
  computed: {
    ...mapState({
      shuffleproducts: state => state.products.shuffleproducts
    })
  },
  mounted() {
    this.$store.dispatch('products/fetchProducts');
    this.getPaginate()
    this.updatePaginate(1)

    // For scroll page top for every Route
    window.scrollTo(0, 0)
  },
  methods: {
    // Product added Alert / notificaion
    alert(item) {
      this.dismissCountDown = item
    },
    // For Pagination
    getPaginate() {
      this.paginates = Math.round(this.shuffleproducts.length / this.paginate)
      this.page = []
      for (let i = 0; i < this.paginates; i++) {
        this.pages.push(i + 1)
      }
    },
    setPaginate(i) {
      if (this.current === 1) {
        return i < this.paginate
      } else {
        return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate))
      }
    },
    updatePaginate(i) {
      this.current = i
      let start = 0
      let end = 0
      if (this.current < this.paginateRange - 1) {
        start = 1
        end = start + this.paginateRange - 1
      } else {
        start = this.current - 1
        end = this.current + 1
      }
      if (start < 1) {
        start = 1
      }
      if (end > this.paginates) {
        end = this.paginates
      }
      this.pages = []
      for (let i = start; i <= end; i++) {
        this.pages.push(i)
      }
      return this.pages
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
          content: 'Shop page - AndShop Ecommerce Vue js, Nuxt js Template'
        }
      ]
    }
  }
}
</script>