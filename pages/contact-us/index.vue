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
                    <div class="col-lg-12">
                        <div class="contact_info">
                            <h3>Contact Information</h3>
                            <p>DefineX is a new generation consulting house and a venture builder that designs and builds the enablers of digital acceleration for the world. Founded by former teams from a leading Global Consulting Company, DefineX emerged in 2019 to define the next and revolutionize the consulting landscape with a fresh, new way of thinking.</p>
                        <br/>
                          <p>We help our clients stay ahead by reinventing themselves in the age of digital disruption. Our vision is to serve the business world through agendas designed to bring impactful solutions to pressing business problems.
                          We help our clients solve new business problems, create disruptive products, and integrate next-generation digital solutions. With a track record of shaping visionary strategies, solving challenging business issues, designing innovative solutions, and delivering technology transformation projects, we are known for our industry expertise and rigorous focus on client success.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="left_side_contact">
                            <ul>
                                <li class="address_location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Kuruçeşme Mahallesi Arnavutköy Kuruçeşme Caddesi No 3/4 Beşiktaş/İstanbul</p>
                                </li>
                                <li class="address_location">
                                    <i class="fas fa-phone-volume"></i>
                                    <div class="contact_widget">
                                        <a href="tel:2129425060">(0212) 942 50 60</a>
                                    </div>
                                </li>
                                <li class="address_location">
                                    <i class="far fa-envelope"></i>
                                    <div class="contact_widget">
                                        <a href="mailto:talentacquisition@teamdefinex.com">talentacquisition@teamdefinex.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                    <div class="col-lg-12">
                        <div class="map_area">
                          <iframe
                              src="https://www.openstreetmap.org/export/embed.html?bbox=29.03081%2C41.05842%2C29.04081%2C41.06242&layer=mapnik&marker=41.06042,29.03581">
                          </iframe>
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
    name: 'contact-us-1',
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