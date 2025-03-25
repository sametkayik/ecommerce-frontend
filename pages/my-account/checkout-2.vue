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
    <section id="checkout_two" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="accordion" role="tablist">
                        <div class="user-actions">
                            <h3 role="tab">
                                <i class="far fa-file"></i>Returning customer?
                                <b-button class="border-0 p-0 bg-transparent" v-b-toggle.checkout_login>Click here to login</b-button>
                            </h3>
                            <b-collapse id="checkout_login" accordion="my-accordion" role="tabpanel">
                                <div class="checkout_info">
                                    <p>If you have shopped with us before, please enter your details in the boxes below. If
                                        you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                                    <form @submit.prevent="handleLoginSubmit">
                                        <div class="form_group default-form-box">
                                            <label>Username or email <span>*</span></label>
                                            <input type="text" v-model="userLogin.username" id="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && $v.userLogin.username.$error }" />                                          
                                            <div v-if="submitted && !$v.userLogin.username.required" class="invalid-feedback">Username or Email is required</div>
                                        </div>
                                        <div class="form_group default-form-box">
                                            <label>Password <span>*</span></label>
                                            <input type="password" v-model="userLogin.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.userLogin.password.$error }" />
                                            <div v-if="submitted && $v.userLogin.password.$error" class="invalid-feedback">
                                                <span v-if="!$v.userLogin.password.required">Password is required</span>
                                                <span v-if="!$v.userLogin.password.minLength">Password must be at least 6 characters</span>
                                            </div>
                                        </div>
                                        <div class="form_group group_3 default-form-box">
                                            <button class="theme-btn-one btn-black-overlay btn_md">Login</button>
                                            <label class="checkbox-default">
                                                <input type="checkbox">
                                                <span>Remember me</span>
                                            </label>
                                        </div>
                                        <a href="#">Lost your password?</a>
                                    </form>
                                </div>
                            </b-collapse>
                        </div>

                        <div class="user-actions">
                            <h3 role="tab">
                                <i class="far fa-file"></i>Returning customer?
                                <b-button class="border-0 p-0 bg-transparent" v-b-toggle.checkout_coupon>Click here to enter your code</b-button>
                            </h3>
                            <b-collapse id="checkout_coupon" class="checkout_coupon" accordion="my-accordion" role="tabpanel">
                                <div class="checkout_info">
                                    <form action="#">
                                        <input placeholder="Coupon code" type="text">
                                        <button class="theme-btn-one btn btn-black-overlay btn-md" type="button">Apply
                                            coupon</button>
                                    </form>
                                </div>
                            </b-collapse>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="checkout_area_two">
                        <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="checkout_form_area">

                                        <h3>Billing Details</h3>
                                        <div class="row pt-4">
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label for="fname">First Name <span>*</span></label>
                                                    <input type="text" v-model="user.fname" id="fname" name="fname" class="form-control" :class="{ 'is-invalid': submitted && $v.user.fname.$error }" />                                                  
                                                    <div v-if="submitted && !$v.user.fname.required" class="invalid-feedback">First Name is required</div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label for="lname">Last Name <span>*</span></label>
                                                    <input type="text" v-model="user.lname" id="lname" name="lname" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lname.$error }" />
                                                    <div v-if="submitted && !$v.user.lname.required" class="invalid-feedback">Last Name is required</div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label for="companyname">Company Name</label>
                                                    <input type="text" v-model="user.companyname" id="companyname" name="companyname" class="form-control" :class="{ 'is-invalid': submitted && $v.user.companyname.$error }" />
                                                    <div v-if="submitted && !$v.user.companyname.required" class="invalid-feedback">Company Name is required</div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label for="country">country <span>*</span></label>
                                                    <select class="country_option nice-select wide form-control"
                                                        v-model="user.country" name="country" id="country" :class="{ 'is-invalid': submitted && $v.user.country.$error }" >
                                                        <option value="2">Bangladesh</option>
                                                        <option value="3">Algeria</option>
                                                        <option value="4">Afghanistan</option>
                                                        <option value="5">Ghana</option>
                                                        <option value="6">Albania</option>
                                                        <option value="7">Bahrain</option>
                                                        <option value="8">Colombia</option>
                                                        <option value="9">Dominican Republic</option>
                                                    </select>
                                                    <div v-if="submitted && !$v.user.country.required" class="invalid-feedback">Country is required</div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label for="street">Street address <span>*</span></label>
                                                    <input v-model="user.street" id="street" name="street" placeholder="House number and street name" type="text"
                                                        class="form-control" :class="{ 'is-invalid': submitted && $v.user.street.$error }" />                                                      
                                                    <div v-if="submitted && !$v.user.street.required" class="invalid-feedback">Street is required</div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label for="city">Town / City <span>*</span></label>
                                                    <input v-model="user.city" id="city" name="city" type="text" class="form-control" :class="{ 'is-invalid': submitted && $v.user.city.$error }" />                                                                                             
                                                    <div v-if="submitted && !$v.user.city.required" class="invalid-feedback">City is required</div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label for="state">State / County <span>*</span></label>
                                                    <input type="text" v-model="user.state" id="state" name="state" class="form-control" :class="{ 'is-invalid': submitted && $v.user.state.$error }" />
                                                    <div v-if="submitted && !$v.user.state.required" class="invalid-feedback">state is required</div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label for="phone">Phone<span>*</span></label>
                                                    <input type="text" v-model="user.phone" id="phone" name="phone" class="form-control" :class="{ 'is-invalid': submitted && $v.user.phone.$error }" />
                                                    <div v-if="submitted && !$v.user.phone.required" class="invalid-feedback">phone is required</div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label for="email"> Email Address <span>*</span></label>
                                                    <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }"  />                                                  
                                                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                                        <span v-if="!$v.user.email.required">Email is required</span>
                                                        <span v-if="!$v.user.email.email">Email is invalid</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="order-notes">
                                                    <label for="order_note">Order Notes</label>
                                                    <textarea id="order_note"
                                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                                        class="form-control" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <h3>Your order</h3>
                                    <div class="order_table table-responsive mb-0">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> Handbag fringilla <strong> × 2</strong></td>
                                                    <td> $165.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Handbag justo <strong> × 2</strong></td>
                                                    <td> $50.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Handbag elit <strong> × 2</strong></td>
                                                    <td> $50.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Handbag Rutrum <strong> × 1</strong></td>
                                                    <td> $50.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Cart Subtotal</th>
                                                    <td>$215.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping</th>
                                                    <td><strong>$5.00</strong></td>
                                                </tr>
                                                <tr class="order_total">
                                                    <th>Order Total</th>
                                                    <td><strong>$220.00</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="payment_method">

                                        <div class="payment-inner panel-default">
                                            <b-button class="bg-transparent p-0 border-0">
                                                <input type="checkbox" id="currencyCod">
                                                <label for="currencyCod" v-b-toggle.methodCod></label> Cash on Delivery 
                                            </b-button>
                                        <b-collapse id="methodCod" class="mt-2">
                                            <div class="card-body1">
                                                <p>Please send a check to Store Name, Store Street, Store Town,
                                                    Store State
                                                    / County, Store Postcode.</p>
                                            </div>
                                        </b-collapse>
                                        </div>

                                        <div class="payment-inner panel-default">
                                            <b-button class="bg-transparent p-0 border-0">
                                                <input type="checkbox" id="currencyPaypal">
                                                <label for="currencyPaypal" v-b-toggle.methodPaypal></label> PayPal
                                            </b-button>
                                        <b-collapse id="methodPaypal" class="mt-2">
                                            <div class="card-body1">
                                            <p>Pay via PayPal; you can pay with your credit card if you don’t
                                                have a
                                                PayPal account.</p>
                                            </div>
                                        </b-collapse>
                                        </div>
                            
                                        <div class="order_button pt-3">
                                            <button class="theme-btn-one btn-black-overlay btn_sm">Place Order</button>
                                        </div>
                                    </div>
                                </div>
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
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
    name: 'checkout-2',

    data() {
        return {
            title: 'Checkout',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Checkout',
                    to: '/my-account/checkout-2'
                }
            ],

            // Payment Method Data 
            visible: false,
            // Form Validation
            userLogin: {
                username: "",
                password: "",
            },
            submitLogin: false,
            user: {
                fname: "",
                lname: "",
                companyname: "",
                country: "",
                street: "",
                city: "",
                state: "",
                phone: "",
                email: "",
            },
            submitted: false

        }
    },
    validations: { 
        userLogin: {
            username: { required },
            password: { required, minLength: minLength(6) },
        },
        user: {
            fname: { required },
            lname: { required },
            companyname: { required },
            country: { required },
            street: { required },
            city: { required },
            state: { required },
            phone: { required },
            email: { required, email },
        },
    },
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
    },
    methods: {
        handleLoginSubmit(e) {
            this.submitLogin = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            this.$router.push('/'); 
        },
        handleSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            alert("Order placed Successfully! Thank you for shopping with us.");
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
            content: 'Checkout page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>