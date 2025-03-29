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
        <section id="my-account_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <!-- Nav tabs -->
                        <div class="dashboard_tab_button">
                          <b-navbar-nav>
                            <b-nav-item to="/my-account"><i class="fas fa-tachometer-alt"></i>Dashboard</b-nav-item>
                            <b-nav-item to="/my-account/chat"><i class="fas fa-cart-arrow-down"></i>Chat</b-nav-item>
                            <b-nav-item to="/my-account/downloads"><i class="fas fa-cloud-download-alt"></i>Downloads</b-nav-item>
                            <b-nav-item to="/my-account/addresses"><i class="fas fa-map-marker-alt"></i>Addresses</b-nav-item>
                            <b-nav-item to="/my-account/account-details"><i class="fas fa-user"></i>Account details</b-nav-item>
                            <b-nav-item @click.prevent="$store.dispatch('auth/logout')">
                              <i class="fas fa-sign-out-alt"></i>Logout
                            </b-nav-item>
                          </b-navbar-nav>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                        <div class="dashboard_content">
                            <div class="myaccount-content">
                                <h4 class="title">Account details</h4>
                                <div class="login_form_container">
                                    <div class="account_details_form">
                                        <form @submit.prevent="handleSubmit">
                                            <div class="input-radio">
                                                <span class="custom-radio"><input type="radio" checked value="1" name="id_gender"> Mr.</span>
                                                <span class="custom-radio"><input type="radio" value="1" name="id_gender"> Mrs.</span>
                                            </div> <br>
                                            <div class="default-form-box mb-20">                                              
                                                <label for="fname">First name</label>
                                                <input type="text" v-model="user.fname" id="fname" name="fname" class="form-control" :class="{ 'is-invalid': submitted && $v.user.fname.$error }" />
                                                <div v-if="submitted && !$v.user.fname.required" class="invalid-feedback">First Name is required</div>
                                            </div>
                                            <div class="default-form-box mb-20">                                             
                                                <label for="lname">Last name</label>
                                                <input type="text" v-model="user.lname" id="lname" name="lname" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lname.$error }" />
                                                <div v-if="submitted && !$v.user.lname.required" class="invalid-feedback">Last Name is required</div>
                                            </div>
                                            <div class="default-form-box mb-20">
                                                <label for="email">Email<span></span></label>
                                                <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                                    <span v-if="!$v.user.email.required">Email is required</span>
                                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                                </div>
                                            </div>
                                            <div class="default-form-box mb-20">
                                                <label for="password">Password</label>
                                                <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                                    <span v-if="!$v.user.password.required">Password is required</span>
                                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                                </div>
                                            </div>
                                            <div class="default-form-box mb-20">
                                                <label for="birthday">Birthdate</label>
                                                <input type="date" v-model="user.birthday" name="birthday" id="birthday" class="form-control">
                                            </div>
                                            <span class="example"> (E.g.: 05/31/1970) </span>
                                            <br>
                                            <label class="checkbox-default" for="offer">
                                                <input type="checkbox" id="receive_offer" v-model="user.receive_offer">
                                                <span>Receive offers from our partners</span>
                                            </label>
                                            <br>
                                            <label class="checkbox-default checkbox-default-more-text" for="newsletter">
                                                <input type="checkbox" id="newsletter" v-model="user.newsletter">
                                                <span>Sign up for our newsletter<br><em>You may unsubscribe at any
                                                    moment. For that purpose, please find our contact info in the
                                                    legal notice.</em>
                                                </span>
                                            </label>
                                            <div class="save_button mt-3">
                                                <button class="theme-btn-one btn-black-overlay btn_md">Save Change</button>
                                            </div>
                                        </form>
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
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
    name: 'AccountDetails',
    data() {
        return {
            title: 'Account Details',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Account details',
                }
            ],
            user: {
                fname: "",
                lname: "",
                email: "",
                password: "",
                birthday: "",
                receive_offer: "",
                newsletter: ""
            },
            submitted: false
        }
    },
    validations: { 
        user: {
            fname: { required },
            lname: { required },
            email: { required, email },
            password: { required, minLength: minLength(6) }
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
            
            this.$router.push('/my-account'); 
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
            content: 'Account Details page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>

<style scoped>
/* My Account Area Dark Mode Styles */
#my-account_area {
  background-color: var(--bg-secondary);
  transition: all 0.3s ease;
}

.dashboard_tab_button {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.dashboard_tab_button .nav-link {
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 15px 20px;
  transition: all 0.3s ease;
}

.dashboard_tab_button .nav-link:hover,
.dashboard_tab_button .nav-link.active {
  color: var(--primary-color);
  background-color: var(--bg-hover);
}

.dashboard_tab_button .nav-link i {
  margin-right: 10px;
  color: var(--text-secondary);
}

.dashboard_content {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 30px;
}

.myaccount-content h4.title {
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.account_details_form label {
  color: var(--text-primary);
}

.account_details_form .form-control {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.account_details_form .form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);
}

.input-radio .custom-radio {
  color: var(--text-primary);
}

.checkbox-default span {
  color: var(--text-primary);
}

.checkbox-default-more-text em {
  color: var(--text-secondary);
}

.invalid-feedback {
  color: #dc3545;
}

/* Dark Mode Variables */
:root {
  /* Light Mode */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-hover: #f1f1f1;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --border-color: #dee2e6;
  --primary-color: #007bff;
}

.dark-mode {
  /* Dark Mode */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-hover: #333333;
  --text-primary: #f8f9fa;
  --text-secondary: #adb5bd;
  --border-color: #495057;
  --primary-color: #4a90e2;
}
</style>