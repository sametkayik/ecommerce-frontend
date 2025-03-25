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
                            <div id="vendor_setting">
                                <div class="vendors_settings">
                                <h4>Setting</h4>
                                <div class="row">
                                    <div class="col-lg-6">
                                    <div class="setings_boxed">
                                        <h3>Notifications</h3>
                                        <form>
                                          <input type="radio" id="allow_desktop" name="fav_language" value="" checked>
                                          <label for="allow_desktop">Allow Desktop Notifications</label><br>
                                          <input type="radio" id="enable" name="fav_language" value="">
                                          <label for="enable">Enable Notifications</label><br>
                                          <input type="radio" id="get_notification" name="fav_language" value="">
                                          <label for="get_notification">Get notification for my own activity</label><br>
                                          <input type="radio" id="dnd" name="fav_language" value="">
                                          <label for="dnd">DND</label>
                                        </form>
                                    </div>
                                    </div>
                                    <div class="col-lg-6">
                                    <div class="setings_boxed">
                                        <h3>Deactivate Account</h3>
                                        <form>
                                          <input type="radio" id="privacy_oncern" name="deactivate_account" value="" checked>
                                          <label for="privacy_oncern">I have a privacy concern</label><br>
                                          <input type="radio" id="is_temporary" name="deactivate_account" value="">
                                          <label for="is_temporary">This is temporary</label><br>
                                          <input type="radio" id="other" name="deactivate_account" value="">
                                          <label for="other">other</label> 
                                        </form>
                                        <button class="theme-btn-one btn-black-overlay btn_sm ">Deactivate Account</button>
                                    </div>
                                    </div>
                                    <div class="col-lg-12">
                                    <div class="setings_boxed">
                                        <h3>Delete Account</h3>
                                        <form>
                                          <input type="radio" id="longer_usable" name="delete_account" value="" checked>
                                          <label for="longer_usable"> No longer usable</label><br>
                                          <input type="radio" id="switch_on_other" name="delete_account" value="">
                                          <label for="switch_on_other">Want to switch on other account</label><br>
                                          <input type="radio" id="other_delete" name="delete_account" value="">
                                          <label for="other_delete">other</label>
                                        </form>
                                        <button class="theme-btn-one btn-black-overlay btn_sm ">Delete Account</button>
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