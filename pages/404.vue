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

        <!-- Error-Area -->
        <section id="error_area" class="ptb-100">
        <div class="container">
            <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="erorr_wrapper">
                <h1>404</h1>
                <h3>We are sorry, the page you've requested is not available!</h3>
                <form>
                    <div class="input-group">
                    <input type="text" class="form-control" />
                    <button><i class="fas fa-search"></i></button>
                    </div>
                </form>
                <nuxt-link to="/" class="theme-btn-one btn-black-overlay btn_md">Back To Home Page</nuxt-link>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'error-page',
    data() {
      return {
        title: 'Error',
        // Breadcrumb Items Data
        breadcrumbItems: [
          {
            text: 'Home',
            to: '/'
          },
          {
            text: 'Error',
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
            content: 'About Us page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>