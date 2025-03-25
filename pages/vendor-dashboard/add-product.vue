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

        <!-- Add Product Area -->
        <section id="add_product_area" class="pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="add_product_wrapper">
                            <div class="back_to_area">
                                <nuxt-link to="/vendor-dashboard/"><i class="fas fa-long-arrow-alt-left"></i> Back To Dashboard</nuxt-link>
                            </div>
                            <h3>Add Product</h3>
                            <form class="add_product_form">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="image-input">
                                            <img :src="require('@/assets/img/product-image/1.png')" class="image-preview"
                                                alt="img">
                                            <input type="file" accept="image/*" id="imageInput">
                                            <label for="imageInput" class="image-button">
                                                <i class="far fa-image"></i>Choose image</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="product_name">Product Name*</label>
                                            <input type="text" id="product_name" class="form-control"
                                                placeholder="T-Shirt Form Girls">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="product_price">Product Price*</label>
                                            <input type="number" id="product_price" class="form-control" placeholder="2">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="product_unit">Product Unit*</label>
                                            <select name="product" id="product_unit">
                                                <option value="Filter">Filter</option>
                                                <option value="volvo">Most Popular</option>
                                                <option value="saab">Best Seller</option>
                                                <option value="mercedes">Tranding</option>
                                                <option value="audi">Featured</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="product_available">Product Available From*</label>
                                            <input type="date" id="product_available" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="estimate_available">Estimate Available For Days*</label>
                                            <input type="number" id="estimate_available" class="form-control"
                                                placeholder="12">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="available_stock">Available Stock (Quantity)*</label>
                                            <input type="number" id="available_stock" class="form-control" placeholder="45">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="whole_sale">Whole Sale Support*</label>
                                            <select name="product" id="whole_sale">
                                                <option value="yes" selected>Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="flash_sale">Flash Sale Support*</label>
                                            <select name="product" id="flash_sale">
                                                <option value="yes" selected>Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="fotm-group">
                                            <label for="frequency_support">Frequency Support*</label>
                                            <select name="product" id="frequency_support">
                                                <option value="yes" selected>Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="btn_right_table">
                                            <button class="theme-btn-one bg-black btn_sm">Add Product</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Instagram Arae -->
        <InstagramArea class="pt-100" />

    </div>
</template>

<script>
import InstagramArea from '~/components/instagram/InstagramArea'
export default {
    name: 'AddProduct',
    components: {
        InstagramArea
    },
    data() {
        return {
            title: 'Add Product',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Add Product',
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
            content: 'Add Product Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>