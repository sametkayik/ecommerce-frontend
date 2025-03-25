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

    <!-- Register-Area -->
    <section id="login_area" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="account_form">
                        <h3>Register</h3>
                        <form @submit.prevent="handleSubmit">
                            <div class="default-form-box">
                                <label>Username <span>*</span></label>
                                <input type="text" v-model="user.username" id="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && $v.user.username.$error }" />
                                <div v-if="submitted && !$v.user.username.required" class="invalid-feedback">Username is required</div>
                            </div>
                        
                            <div class="default-form-box">
                                <label>Email <span>*</span></label>
                                <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                            </div>

                            <div class="default-form-box">
                                <label for="password">Password</label>
                                <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
                            </div>
                                
                            <div class="login_submit">
                                <button class="theme-btn-one btn-black-overlay btn_md">Register</button>
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
    name: 'Register',
    data() {
        return {
            
            title: 'Register',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Register'
                }
            ],
            // Form Validation
            user: {
                username: "",
                email: "",
                password: "",
            },
            submitted: false

        }
    },
    validations: {
        user: {
            username: { required },
            email: { required, email },
            password: { required, minLength: minLength(6) },
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
            alert("Registered Successfully!");
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
            content: 'Register page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>