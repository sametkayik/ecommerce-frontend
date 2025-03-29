<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container ">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
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
                        <input id="fname" v-model="user.fname" :class="{ 'is-invalid': submitted && $v.user.fname.$error }" class="form-control"
                               name="fname" placeholder="First name *"
                               type="text"/>
                        <div v-if="submitted && !$v.user.fname.required"
                             class="invalid-feedback">First Name is required
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="lname">Last name</label>
                        <input id="lname" v-model="user.lname" :class="{ 'is-invalid': submitted && $v.user.lname.$error }" class="form-control"
                               name="lname" placeholder="Last name *"
                               type="text"/>
                        <div v-if="submitted && !$v.user.lname.required"
                             class="invalid-feedback">Last Name is required
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="companyname">Company Name</label>
                        <input id="companyname" v-model="user.companyname" :class="{ 'is-invalid': submitted && $v.user.companyname.$error }"
                               class="form-control" name="companyname" placeholder="Company Name"
                               type="text"/>
                        <div v-if="submitted && !$v.user.companyname.required"
                             class="invalid-feedback">Company Name is required
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label>Email Address <span></span></label>
                        <input id="email" v-model="user.email" :class="{ 'is-invalid': submitted && $v.user.email.$error }" class="form-control"
                               name="email" placeholder="info@gmail.com"
                               type="email"/>
                        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                          <span v-if="!$v.user.email.required">Email is required</span>
                          <span v-if="!$v.user.email.email">Email is invalid</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="countryname">Country</label>
                        <select id="countryname" v-model="user.countryname"
                                class="form-control first_null">
                          <option value="">Select an option...</option>
                          <option value="AX">usa</option>
                          <option value="AF">Afghanistan</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="city">State/City</label>
                        <select id="city" v-model="user.city" class="form-control first_null">
                          <option value="">Select an option...</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AF">Afghanistan</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="zip">State/City</label>
                        <input id="zip" v-model="user.zip" class="form-control" placeholder="Enter Your zipcode"
                               type="text">
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="faddress">Full Address</label>
                        <input id="faddress" v-model="user.faddress" class="form-control"
                               placeholder="Enter your address here.." type="text">
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="messages">Additional Notes</label>
                        <textarea id="messages" v-model="user.messages" class="form-control"
                                  placeholder="Order notes" rows="5"></textarea>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-check">
                        <input id="materialUnchecked" class="form-check-input" type="checkbox">
                        <label class="form-check-label" for="materialUnchecked">Save In Address
                          Book</label>
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
                    <tr v-for="(item, index) in $store.state.cart.cart"
                        :key="item.variantId || index">
                      <td>
                        {{ item.title }}
                        <div v-if="item.color || item.size" class="variant-info">
                                                        <span v-if="item.color" :style="{ backgroundColor: item.color }"
                                                              class="color-badge"></span>
                          <span v-if="item.size">Size: {{ item.size }}</span>
                        </div>
                      </td>
                      <td>${{
                          (item.price - (item.price * item.discount / 100)) *
                          item.quantity
                        }}
                      </td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <th>Sub Total</th>
                      <td>${{ subtotal.toFixed(2) }}</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>${{ shipping.toFixed(2) }}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>${{ total.toFixed(2) }}</td>
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
                      <input id="exampleRadios3" checked="" class="form-check-input"
                             name="payment_option" required="" type="radio" value="option3">
                      <label class="form-check-label" for="exampleRadios3">Direct Bank
                        Transfer</label>
                      <p class="payment-text" data-method="option3">There are many variations of
                        passages
                        of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div class="custome-radio">
                      <input id="exampleRadios4" class="form-check-input" name="payment_option"
                             type="radio" value="option4">
                      <label class="form-check-label" for="exampleRadios4">Check Payment</label>
                      <p class="payment-text" data-method="option4">Please send your cheque to
                        Store Name,
                        Store Street, Store Town, Store State / County, Store Postcode.</p>
                    </div>
                    <div class="custome-radio">
                      <input id="exampleRadios5" class="form-check-input" name="payment_option"
                             type="radio" value="option5">
                      <label class="form-check-label" for="exampleRadios5">Paypal</label>
                      <p class="payment-text" data-method="option5">Pay via PayPal; you can pay
                        with your
                        credit card if you don't have a PayPal account.</p>
                    </div>
                  </div>
                </div>
                <button class="theme-btn-one btn-black-overlay btn_sm">Place Order</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

  </div>
</template>

<script>
import {email, required} from "vuelidate/lib/validators";

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
      fname: {required},
      lname: {required},
      companyname: {required},
      email: {required, email},
    }
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0)
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.cart;
    },
    subtotal() {
      return this.cartItems.reduce((total, item) => {
        const discountedPrice = item.price - (item.price * (item.discount || 0) / 100);
        return total + (discountedPrice * item.quantity);
      }, 0);
    },
    shipping() {
      // Kargo ücreti hesaplaması
      return 15.00; // Örnek sabit kargo ücreti
    },
    total() {
      return this.subtotal + this.shipping;
    }
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
<style scoped>
.variant-info {
  font-size: 12px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.color-badge {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #ddd;
}

/* Orders sayfası için ek stil */
.orders-table .variant-info {
  margin-left: 5px;
}
</style>