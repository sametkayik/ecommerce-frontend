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
                            <div id="all_order">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="vendor_order_boxed">
                                            <h4>All Order</h4>
                                            <div class="table-responsive">
                                                <table class="table pending_table">
                                                    <thead class="thead-light">
                                                        <tr>
                                                        <th scope="col">Order Id</th>
                                                        <th scope="col">Product Details</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                        <td scope="row">#21515</td>
                                                        <td>Neck Velvet Dress</td>
                                                        <td>Confrimed</td>
                                                        <td>$234</td>
                                                        </tr>
                                                        <tr>
                                                        <td scope="row">#78153</td>
                                                        <td>Belted Trench Coat</td>
                                                        <td>Shipped</td>
                                                        <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                        <td scope="row">#51512</td>
                                                        <td>Man Print Tee</td>
                                                        <td>Pending</td>
                                                        <td>$754</td>
                                                        </tr>
                                                        <tr>
                                                        <td scope="row">#78153	</td>
                                                        <td>Belted Trench Coat</td>
                                                        <td>Shipped</td>
                                                        <td>$204</td>
                                                        </tr>
                                                        <tr>
                                                        <td scope="row">#78153</td>
                                                        <td>Belted Trench Coat</td>
                                                        <td>Shipped</td>
                                                        <td>$894</td>
                                                        </tr>
                                                        <tr>
                                                        <td scope="row">#51512		</td>
                                                        <td>Man Print Tee</td>
                                                        <td>Pending</td>
                                                        <td>$234</td>
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