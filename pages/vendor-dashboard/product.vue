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

        <!-- My Account-Area -->
        <section id="vendor_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <!-- Nav tabs -->
                        <div class="dashboard_tab_button">
                            <b-navbar-nav>
                                <b-nav-item to="/vendor-dashboard/"><i class="fas fa-tachometer-alt"></i>Dashboard</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/product"><i class="fas fa-shopping-cart"></i>Product</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/order"><i class="fas fa-shopping-bag"></i>Order</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/profile"><i class="far fa-id-badge"></i>Profile</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/add-product"><i class="fas fa-cart-plus"></i>Add Product</b-nav-item>
                                <b-nav-item to="/vendor-dashboard/setting"><i class="fas fa-user-cog"></i>Setting</b-nav-item>
                            </b-navbar-nav>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                        <div class="dashboard_content">
                            <div id="all_product">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="vendor_order_boxed">
                                            <h4>All Products</h4>
                                            <div class="table-responsive">
                                                <table class="table pending_table">
                                                <thead class="thead-light">
                                                    <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">Sales</th>
                                                    <th scope="col">Edit/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td scope="row"><img :src="require('@/assets/img/common/1.jpg')" alt="img"></td>
                                                    <td>Neck Velvet Dress	</td>
                                                    <td>Women Clothes</td>
                                                    <td>$205</td>
                                                    <td>1000</td>
                                                    <td>2000</td>
                                                    <td><a href="#!"><i class="fas fa-edit"></i></a> <a href="#!"><i class="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row"><img :src="require('@/assets/img/common/1.jpg')" alt="img"></td>
                                                    <td>Neck Velvet Dress	</td>
                                                    <td>Women Clothes</td>
                                                    <td>$205</td>
                                                    <td>1000</td>
                                                    <td>2000</td>
                                                    <td><a href="#!"><i class="fas fa-edit"></i></a> <a href="#!"><i class="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row"><img :src="require('@/assets/img/common/1.jpg')" alt="img"></td>
                                                    <td>Neck Velvet Dress	</td>
                                                    <td>Women Clothes</td>
                                                    <td>$205</td>
                                                    <td>1000</td>
                                                    <td>2000</td>
                                                    <td><a href="#!"><i class="fas fa-edit"></i></a> <a href="#!"><i class="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row"><img :src="require('@/assets/img/common/1.jpg')" alt="img"></td>
                                                    <td>Neck Velvet Dress	</td>
                                                    <td>Women Clothes</td>
                                                    <td>$205</td>
                                                    <td>1000</td>
                                                    <td>2000</td>
                                                    <td><a href="#!"><i class="fas fa-edit"></i></a> <a href="#!"><i class="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row"><img :src="require('@/assets/img/common/1.jpg')" alt="img"></td>
                                                    <td>Neck Velvet Dress	</td>
                                                    <td>Women Clothes</td>
                                                    <td>$205</td>
                                                    <td>1000</td>
                                                    <td>2000</td>
                                                    <td><a href="#!"><i class="fas fa-edit"></i></a> <a href="#!"><i class="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row"><img :src="require('@/assets/img/common/1.jpg')" alt="img"></td>
                                                    <td>Neck Velvet Dress	</td>
                                                    <td>Women Clothes</td>
                                                    <td>$205</td>
                                                    <td>1000</td>
                                                    <td>2000</td>
                                                    <td><a href="#!"><i class="fas fa-edit"></i></a> <a href="#!"><i class="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row"><img :src="require('@/assets/img/common/1.jpg')" alt="img"></td>
                                                    <td>Neck Velvet Dress	</td>
                                                    <td>Women Clothes</td>
                                                    <td>$205</td>
                                                    <td>1000</td>
                                                    <td>2000</td>
                                                    <td><a href="#!"><i class="fas fa-edit"></i></a> <a href="#!"><i class="fas fa-trash-alt"></i></a></td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                            <div class="btn_right_table">
                                                <nuxt-link to="/vendor-dashboard/add-product" class="theme-btn-one bg-black btn_sm">Add Product</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'VendorDashboard',
    data() {
        return {
            title: 'Vendor',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Vendor',
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
            content: 'Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>