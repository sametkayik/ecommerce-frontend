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

        <!-- Order-Tracking-Area -->
        <section id="order_tracking" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="order_tracking_wrapper">
                            <h4>Order Tracking</h4>
                            <p>To track your order please enter your Order ID in the box below and press the "Track" button.</p>

                                <form @submit.prevent="handleOrderSubmit">
                                    <div class="form-group">
                                        <label for="order_id">Order ID</label>
                                        <input type="text" v-model="order.order_id" id="order_id" name="order_id" class="form-control" placeholder="Found in your order Confirmation email" :class="{ 'is-invalid': submitted && $v.order.order_id.$error }" />
                                        <div v-if="submitted && !$v.order.order_id.required" class="invalid-feedback">Order ID is required</div>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Billing Email</label>
                                        <input type="email" v-model="order.email" id="email" name="email" class="form-control" placeholder="Enter Your Email Address" :class="{ 'is-invalid': submitted && $v.order.email.$error }" />
                                        <div v-if="submitted && $v.order.email.$error" class="invalid-feedback">
                                            <span v-if="!$v.order.email.required">Billing Email is required</span>
                                            <span v-if="!$v.order.email.email">Billing Email is invalid</span>
                                        </div>
                                    </div>
                                    <div class="order_track_button">
                                        <button class="theme-btn-one btn-black-overlay btn_md">Track</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
    name: 'cart-2',

    data() {
        return {

            title: 'Order Tracking',
            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Order Tracking',
                    to: '/my-account/order-tracking'
                }
            ],
            // Form Validation
            order: {
                order_id: "",
                email: "",
            },
            submitted: false

        }
    },
    validations: {
        order: {
            order_id: { required },
            email: { required, email },
        }
    },
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
    },
    methods: {
        handleOrderSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            
            this.$router.push('/'); 
        }
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Order Tracking page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>