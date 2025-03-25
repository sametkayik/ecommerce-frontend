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

        <!-- Contact Us Area -->
        <section id="contact_area" class="ptb-100">
            <div class="container">
        
                <div class="row">
                    <div class="col-lg-8">
                        <div class="contact_form_one">
                            <h3>Get In Touch</h3>
                            <form @submit.prevent="handleSubmit">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="text" v-model="user.firstName" id="firstName" name="firstName" placeholder="Name*" class="form-control" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
                                            <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">Name is required</div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="email" v-model="user.email" id="email" name="email" placeholder="email*" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                                <span v-if="!$v.user.email.required">Email is required</span>
                                                <span v-if="!$v.user.email.email">Email is invalid</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="text" v-model="user.phone" id="phone" name="phone" placeholder="Phone*" class="form-control" :class="{ 'is-invalid': submitted && $v.user.phone.$error }" />
                                            <div v-if="submitted && !$v.user.phone.required" class="invalid-feedback">Phone is required</div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="text" v-model="user.subject" id="subject" name="subject" class="form-control" placeholder="Subject" :class="{ 'is-invalid': submitted && $v.user.subject.$error }" />
                                            <div v-if="submitted && $v.user.subject.$error" class="invalid-feedback">
                                                <span v-if="!$v.user.subject.required">Subject is required</span>
                                                <span v-if="!$v.user.subject.minLength">Subject must be at least 6 characters</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <textarea rows="7" v-model="user.message" id="message" name="message" class="form-control" placeholder="Message*" :class="{ 'is-invalid': submitted && $v.user.message.$error }"></textarea>
                                            <div v-if="submitted && !$v.user.message.required" class="invalid-feedback">Message is required</div>
                                        </div>
                                        
                                        <div class="submit_bitton_contact_one">
                                            <button class="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="left_side_contact">
                            <ul>
                                <li class="address_location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh</p>
                                </li>
                                <li class="address_location">
                                    <i class="fas fa-phone-volume"></i>
                                    <div class="contact_widget">
                                        <a href="tel:2873077">+1 (833) 287-3077</a>
                                        <a href="tel:2873077">+1 (833) 528-8619</a>
                                    </div>
                                </li>
                                <li class="address_location">
                                    <i class="far fa-envelope"></i>
                                    <div class="contact_widget">
                                        <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                                        <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
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
    name: 'contact-us-2',
    data() {
        return {

            title: 'Contact Us',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Contact'
                }
            ],
            // Form Validation
            user: {
                firstName: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            },
            submitted: false
        }
    },

    validations: {
        user: {
            firstName: { required },
            phone: { required },
            email: { required, email },
            subject: { required, minLength: minLength(6) },
            message: { required },
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
            alert("Form Submitted Successfully!");
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
            content: 'Contact Us page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>