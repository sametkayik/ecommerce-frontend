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

        <!-- Account Info Edit Area  -->
        <section id="account_edit" class="pt-100">
            <div class="container">
                <div class="row">
                <div class="col-lg-3">
                    <div class="account_thumd text-center">
                        <img :src="require('@/assets/img/team/team1.png')" alt="img" class="rounded-circle">
                        <h4 class="mt-4 mb-2">Robert Downey JR.</h4>
                        <p class="mb-3">UX/UI Designer</p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="account_setting">
                    <div class="account_setting_heading mb-3">
                        <h2 class="pb-1">Account Details</h2>
                        <p>Edit your account settings and change your password here.</p>
                    </div>
                    <form @submit.prevent="handleSubmit" id="account_info_form">
                        <div class="form-group">
                            <label for="text">Name</label>
                            <input type="text" v-model="user.fname" class="form-control" value="Jhon" :class="{ 'is-invalid': submitted && $v.user.fname.$error }" />
                            <div v-if="submitted && !$v.user.fname.required" class="invalid-feedback">First Name is required</div>

                            <input type="text" v-model="user.lname" class="form-control" value="Dhoe" :class="{ 'is-invalid': submitted && $v.user.lname.$error }" />
                            <div v-if="submitted && !$v.user.lname.required" class="invalid-feedback">Last Name is required</div>
                        </div>
                        <div class="form-group">
                            <label for="text">Email Address</label>
                            <input type="email" v-model="user.email" class="form-control" value="example@demo.com" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                <span v-if="!$v.user.email.required">Email is required</span>
                                <span v-if="!$v.user.email.email">Email is invalid</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="text">Current Password</label>
                            <input type="password" v-model="user.oldPassword" class="form-control" placeholder="Enter your current password" :class="{ 'is-invalid': submitted && $v.user.oldPassword.$error }" />
                            <div v-if="submitted && $v.user.oldPassword.$error" class="invalid-feedback">
                                <span v-if="!$v.user.oldPassword.required">Password is required</span>
                                <span v-if="!$v.user.oldPassword.minLength">Password must be at least 6 characters</span>
                            </div>
                            <input type="password" v-model="user.password" class="form-control" placeholder="Enter your new password" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                            <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                <span v-if="!$v.user.password.required">Password is required</span>
                                <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                            </div>
                            <input type="password" v-model="user.confirmPassword" class="form-control" placeholder="Re-type your new password" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                            <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                            </div>
                        </div>
                        <button class="theme-btn-one bg-black btn_sm">Update Information</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <!-- Instagram Arae -->
        <InstagramArea class="pt-100" />

    </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import InstagramArea from '~/components/instagram/InstagramArea'
export default {
    name: 'AccountInfoEdit',
    components: {
        InstagramArea,
    },
    data() {
        return {
            title: 'Account Info Edit',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Account info edit',
                }
            ],
            user: {
                fname: "John",
                lname: "Doe",
                email: "demo@example.com",
                oldPassword: "",
                password: "",
                confirmPassword: "",
            },
            submitted: false
        }
    },
    validations: { 
        user: {
            fname: { required },
            lname: { required },
            email: { required, email },
            oldPassword: { required, minLength: minLength(6) },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs('password') }
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
            
            this.$router.push('/my-account/addresses'); 
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
            content: 'Account info edit page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>