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
                            <div id="profile_vendor">
                                <div class="vendors_profiles">
                                    <h4>Profile</h4>
                                    <ul>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Company Name:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>Fashion Store</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Email Address:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>demo123@gmail.com</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Country / Region:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>Downers Grove, IL</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Year Established:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>2018</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Total Employees:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>101 - 200 People</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Category:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>Clothing</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Street Address:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>549 Sulphur Springs Road</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>City/State:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>Downers Grove, IL</h4>
                                            </div>
                                            </div>    
                                        </li>
                                        <li>
                                            <div class="profils_details_vendor">
                                                <div class="profile_left">
                                                <h4>Zip:</h4>
                                            </div>
                                            <div class="profile_right">
                                                <h4>60515</h4>
                                            </div>
                                            </div>    
                                        </li>
                                    </ul>
                                    <div class="btn_left_table">
                                        <nuxt-link to="/my-account/account-info-edit" class="theme-btn-one bg-black btn_sm">Edit Profile</nuxt-link>
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