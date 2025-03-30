<template>
    <div>
        <!-- Banner Area -->
        <section id="common_banner_one">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="common_banner_text">
                            <h2>{{ title }}</h2>
                            <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- My Account Area -->
        <section id="vendor_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <!-- Nav tabs -->
                        <div class="dashboard_tab_button">
                          <b-navbar-nav>
                            <b-nav-item to="/my-account"><i class="fas fa-tachometer-alt"></i>Dashboard</b-nav-item>
                            <b-nav-item to="/my-account/product"><i class="fas fa-map-marker-alt"></i>Products</b-nav-item>
                            <b-nav-item to="/my-account/add-product"><i class="fas fa-cart-arrow-down"></i>Add Product</b-nav-item>
                            <b-nav-item to="/my-account/chat"><i class="fas fa-cart-arrow-down"></i>Chat</b-nav-item>
                            <b-nav-item to="/my-account/downloads"><i class="fas fa-cloud-download-alt"></i>Downloads</b-nav-item>
                            <b-nav-item to="/my-account/account-details"><i class="fas fa-user"></i>Account details</b-nav-item>
                            <b-nav-item @click.prevent="$store.dispatch('auth/logout')">
                              <i class="fas fa-sign-out-alt"></i>Logout
                            </b-nav-item>
                          </b-navbar-nav>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="dashboard_content">
                            <div id="all_product">
                                <div class="vendor_order_boxed">
                                    <h4>All Products</h4>
                                    <div class="table-responsive">
                                        <table class="table pending_table">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Category</th>
                                                    <th>Price</th>
                                                    <th>Stock</th>
                                                    <th>Edit/Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="product in productslist" :key="product.id">
                                                    <td>
                                                        <img v-if="product.images?.length" 
                                                             :src="product.images[0].src" 
                                                             :alt="product.images[0].alt" 
                                                             class="img-thumbnail" 
                                                             style="width: 50px; height: 50px; object-fit: cover;">
                                                    </td>
                                                    <td>{{ product.title }}</td>
                                                    <td>{{ product.category }}</td>
                                                    <td>${{ product.price }}</td>
                                                    <td>{{ product.stock }}</td>
                                                    <td>
        <a href="#"><i class="fas fa-edit"></i></a> 
        <a href="#" @click.prevent="confirmDelete(product)"><i class="fas fa-trash-alt"></i></a>
    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
import { mapState } from 'vuex';

export default {
    name: 'VendorDashboard',
    data() {
        return {
            title: 'Vendor',
            breadcrumbItems: [
                { text: 'Home', to: '/' },
                { text: 'Vendor' }
            ]
        };
    },
    computed: {
        ...mapState('products', ['productslist'])
    },
    methods: {
        async confirmDelete(product) {
            const confirmed = await this.$bvModal.msgBoxConfirm(
                `"${product.title}" ürününü silmek istediğinize emin misiniz?`,
                {
                    title: 'Silme Onayı',
                    okTitle: 'Evet',
                    cancelTitle: 'İptal',
                    centered: true
                }
            );
            
            if (confirmed) {
                await this.deleteProduct(product.id);
            }
        },
        async deleteProduct(productId) {
            
            const token = localStorage.getItem('authToken')
            console.log(token)
            try {
                await this.$axios.$delete(`/api/products/${productId}`, {
                    headers: {
                        'Authorization': `Bearer ${{token}}`
                    }
                });
                this.$store.dispatch('products/fetchProducts');
            } catch (error) {
                console.error('Ürün silinirken hata oluştu:', error);
            }
        }
    },
    async mounted() {
        await this.$store.dispatch('products/fetchProducts');
        window.scrollTo(0, 0);
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Vendor Dashboard - AndShop Ecommerce Vue.js, Nuxt.js Template'
                }
            ]
        };
    }
};
</script>