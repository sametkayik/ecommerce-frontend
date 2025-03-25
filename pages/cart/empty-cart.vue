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

        <!--Empty Cart-Area -->
        <section id="empty_cart_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
                        <div class="empaty_cart_area">
                            <img :src="require('@/assets/img/common/empty-cart.png')" alt="img">
                            <h2>YOUR CART IS EMPTY</h2>
                            <h3>Sorry Mate... No Item Found Inside Your Cart!</h3>
                            <nuxt-link to="/shop" class="btn btn-black-overlay btn_md">Continue Shopping</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: 'empty-cart',

    data() {
        return {
            title: 'Empty Cart',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Empty Cart'
                }
            ],

        }
    },
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
    },
    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Empty Cart page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>