<template>
  <div>
        <!-- Banner Area -->
        <section id="common_banner_one">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="common_banner_text">
                            <h2>{{this.title}}</h2>
                            <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Checkout-Area -->
        <section id="compare_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc">
                            <div class="table_page table-responsive compare-table mb-0">
                                <table class="table">
                                    <tbody v-if="compare.length">
                                        <tr>
                                            <td class="first-column">Product</td>
                                            <td v-for="(item, index) in compare" :key="index" class="product-image-title">
                                                <nuxt-link :to="{ path: '/product/'+item.id }" class="image">
                                                    <img :src="getImageUrl(item.images[0].src)" alt="Compare Product" />
                                                </nuxt-link>
                                                <nuxt-link to="/shop/shop-4" class="category">{{item.type}}</nuxt-link>
                                                <h5><nuxt-link :to="{ path: '/product/'+item.id }" class="title">{{item.title}}</nuxt-link></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Description</td>
                                            <td v-for="(item, index) in compare" :key="index" class="pro-desc">
                                                <p>{{item.description}}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Price</td>
                                            <td v-for="(item, index) in compare" :key="index" class="pro-price">${{item.price}}</td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Stock</td>
                                            <td v-for="(item, index) in compare" :key="index" class="pro-stock">{{item.stock}}</td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Add to cart</td>
                                            <td v-for="(item, index) in compare" :key="index" class="pro-addtocart">
                                                <button @click="addToCart(item)" class="theme-btn-one btn-black-overlay btn_sm"><span>ADD TO CART</span></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Delete</td>
                                            <td v-for="(item, index) in compare" :key="index" class="pro-remove product_remove"><button @click="removeCompareItem(item)" class="bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Rating</td>
                                            <td v-for="(item, index) in compare" :key="index" class="pro-ratting">
                                                <div v-if="item.rating==5" class="product-review">
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                </div>
                                                <div v-else-if="item.rating==4" class="product-review">
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                </div>
                                                <div v-else-if="item.rating==3" class="product-review">
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                </div>
                                                <div v-else-if="item.rating==2" class="product-review">
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                </div>
                                                <div v-else-if="item.rating==1" class="product-review">
                                                    <span class="review-fill"><i class="fas fa-star active"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                    <span class="review-fill"><i class="fas fa-star"></i></span>
                                                </div>
                                                <div v-else class="product-review">
                                                    <span class="review-fill">No Rating</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr><td>No item found to compare!</td></tr>
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
import { mapGetters } from 'vuex'
export default {
    name: 'compare',

    data() {
        return {
            title: 'Compare',
            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Compare',
                    to: '/my-account/compare'
                }
            ],

        }
    },
    computed: {
        ...mapGetters({
            compare: 'products/compareItems'
        })
    },
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
    },
    methods: {
        removeCompareItem: function(product) {
            this.$store.dispatch('products/removeCompareItem', product)
        },
        // Image Url 
        getImageUrl(path) {
            return require('@/assets/img/product-image/' + path )
        },
        // Product Add To Cart
        addToCart: function(product) {
        this.$store.dispatch('cart/addToCart', product);
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
            content: 'Compare page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>