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
        <section id="Wishlist_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc">
                            <div class="table_page table-responsive mb-0">
                                <table class="mb-0">
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
                                    </thead> <!-- End Cart Table Head -->
                                    <tbody v-if="wishlist.length"> 
                                        <!-- Start Wishlist Single Item-->
                                        <tr v-for="( item, index ) in wishlist" :key="index">
                                            <td class="product_remove"><button @click="removeWishlistItem(item)" class="bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button></td>

                                            <td class="product_thumb">
                                                <nuxt-link to="/product">
                                                    <img :src="getImageUrl(item.images[0].src)" alt="img" />
                                                </nuxt-link>
                                            </td>
                                            <td class="product_name"><nuxt-link :to="{ path: '/product/'+item.id }">{{item.title}}</nuxt-link></td>
                                            <td class="product-price">${{item.price}}</td>
                                            <td class="product_stock"><h6>In Stock</h6></td>
                                            <td class="product_addcart">
                                                <button @click="addToCart(item)" class="theme-btn-one btn-black-overlay btn_sm" >Add To Cart</button>
                                            </td>
                                        </tr> 
                                    </tbody>
                                    <tbody v-else>
                                        <tr><td class="border-0">No Item found!</td></tr>
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
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'wishlist',

    data() {
        return {
            title: 'Wishlist',
            // Breadcrumb Items Data
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
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
    },

    methods: {
      // Image Url 
        getImageUrl(path) {
            return require('@/assets/img/product-image/' + path )
        },
        // For Delete/Remove wishlist Item 
        removeWishlistItem: function (product) {
            this.$store.dispatch('products/removeWishlistItem', product)
        },
        // Product Add To Cart realted methods
        addToCart: function(product) {
            this.dismissCountDown = this.dismissSecs;
            this.cartProduct = product;
            this.$emit('showalert', this.dismissCountDown);
            this.$store.dispatch('cart/addToCart', product);
        },

        // After Add to cart Alert 
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
            this.$emit('alertseconds', this.dismissCountDown)
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
            content: 'Wishlist page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>