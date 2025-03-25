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
    <section id="checkout_one" class="ptb-100">
        <div class="container">
            <form @submit.prevent="handleSubmit">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="checkout-area-bg bg-white">
                            <div class="check-heading">
                                <h3>Billing Information</h3>
                            </div>
                            <div class="check-out-form">
                                <div class="row">
                                        
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="fname">First name</label>
                                            <input type="text" v-model="user.fname" id="fname" name="fname" class="form-control" placeholder="First name *" :class="{ 'is-invalid': submitted && $v.user.fname.$error }" />
                                            <div v-if="submitted && !$v.user.fname.required" class="invalid-feedback">First Name is required</div>
                                        </div>
                                    </div>
                                        
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="lname">Last name</label>
                                            <input type="text" v-model="user.lname" id="lname" name="lname" class="form-control" placeholder="Last name *" :class="{ 'is-invalid': submitted && $v.user.lname.$error }" />
                                            <div v-if="submitted && !$v.user.lname.required" class="invalid-feedback">Last Name is required</div>
                                        </div>
                                    </div>
                                        
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="companyname">Company Name</label>
                                            <input type="text" v-model="user.companyname" id="companyname" name="companyname" class="form-control" placeholder="Company Name" :class="{ 'is-invalid': submitted && $v.user.companyname.$error }" />
                                            <div v-if="submitted && !$v.user.companyname.required" class="invalid-feedback">Company Name is required</div>
                                        </div>
                                    </div>
                                
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label>Email Address <span></span></label>
                                            <input type="email" v-model="user.email" id="email" name="email" class="form-control" placeholder="info@gmail.com" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                                <span v-if="!$v.user.email.required">Email is required</span>
                                                <span v-if="!$v.user.email.email">Email is invalid</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="countryname">Country</label>
                                            <select class="form-control first_null" v-model="user.countryname" id="countryname">
                                                <option value="">Select an option...</option>
                                                <option value="AX">usa</option>
                                                <option value="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="city">State/City</label>
                                            <select class="form-control first_null" v-model="user.city" id="city">
                                                <option value="">Select an option...</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="zip">State/City</label>
                                            <input type="text" class="form-control" v-model="user.zip" id="zip"
                                                placeholder="Enter Your zipcode">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="faddress">Full Address</label>
                                            <input type="text" class="form-control" v-model="user.faddress" id="faddress"
                                                placeholder="Enter your address here..">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label for="messages">Additional Notes</label>
                                            <textarea rows="5" class="form-control" v-model="user.messages" id="messages"
                                                placeholder="Order notes"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="materialUnchecked">
                                            <label class="form-check-label" for="materialUnchecked">Save In Address Book</label>
                                        </div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="order_review box-shadow bg-white">
                            <div class="check-heading">
                                <h3>Your Orders</h3>
                            </div>
                            <div class="table-responsive order_table">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Blue Dress For Woman <span class="product-qty">x 2</span>
                                            </td>
                                            <td>$90.00</td>
                                        </tr>
                                        <tr>
                                            <td>Lether Gray Tuxedo <span class="product-qty">x 1</span>
                                            </td>
                                            <td>$55.00</td>
                                        </tr>
                                        <tr>
                                            <td>Woman Full Sliv Dresss <span class="product-qty">x 3</span>
                                            </td>
                                            <td>$204.00</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>SubTotal</th>
                                            <td class="product-subtotal">$349.00</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>Free Shipping</td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td class="product-subtotal">$349.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div class="order_review bg-white">
                            <div class="check-heading">
                                <h3>Payment</h3>
                            </div>
                            <div class="payment_method">
                                <div class="payment_option">
                                    <div class="custome-radio">
                                        <input class="form-check-input" required="" type="radio" name="payment_option"
                                            id="exampleRadios3" value="option3" checked="">
                                        <label class="form-check-label" for="exampleRadios3">Direct Bank Transfer</label>
                                        <p data-method="option3" class="payment-text">There are many variations of passages
                                            of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                    <div class="custome-radio">
                                        <input class="form-check-input" type="radio" name="payment_option"
                                            id="exampleRadios4" value="option4">
                                        <label class="form-check-label" for="exampleRadios4">Check Payment</label>
                                        <p data-method="option4" class="payment-text">Please send your cheque to Store Name,
                                            Store Street, Store Town, Store State / County, Store Postcode.</p>
                                    </div>
                                    <div class="custome-radio">
                                        <input class="form-check-input" type="radio" name="payment_option"
                                            id="exampleRadios5" value="option5">
                                        <label class="form-check-label" for="exampleRadios5">Paypal</label>
                                        <p data-method="option5" class="payment-text">Pay via PayPal; you can pay with your
                                            credit card if you don't have a PayPal account.</p>
                                    </div>
                                </div>
                            </div><button class="theme-btn-one btn-black-overlay btn_sm">Place Order</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>

  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
    name: 'checkout-1',

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
                    to: '/my-account/checkout'
                }
            ],
            // Form Validation
            user: {
                fname: "",
                lname: "",
                email: "",
                companyname: "",
                countryname: "",
                zip: "",
                faddress: "",
                messages: "",
                city: "", 
            },
            submitted: false

        }
    },
    validations: {
        user: {
            fname: { required },
            lname: { required },
            companyname: { required },
            email: { required, email },
        }
    },
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
    },
    methods: {
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