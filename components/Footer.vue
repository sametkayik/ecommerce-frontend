<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="footer_left_side">
                        <nuxt-link to="/"><img 
                  :src="$store.state.darkMode ? require('@/assets/img/light-logo.png') : require('@/assets/img/logo.png')" 
                  alt="logo"
                /></nuxt-link>
                        <p>
                          DefineX is a new generation consulting house and a venture builder that designs and builds the enablers of digital acceleration for the world. Founded by former teams from a leading Global Consulting Company, DefineX emerged in 2019 to define the next and revolutionize the consulting landscape with a fresh, new way of thinking.
                        </p>
                        <div class="footer_left_side_icon">
                          <ul>
                            <li><a href="https://x.com/DefinexGlobal"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/definex-consulting-technology-labs/"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="https://www.instagram.com/teamdefinex/"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/@teamdefineX"><i class="fab fa-youtube"></i></a></li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="footer_one_widget">
                        <h3>Information</h3>
                        <ul>
                            <li><nuxt-link to="/">Home Page</nuxt-link></li>
                            <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                        </ul>
                    </div>
                </div>
 
                <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="footer_one_widget">
                        <h3>Subscribe to Feed</h3>
                        <div id="mc_embed_signup" class="subscribe-form">
                            <form @submit.prevent="handleSubmit">
                                <div class="mc-form">
                                    <input class="form-control" type="email" v-model="user.email" id="email" name="email" placeholder="Email address" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                        <span v-if="!$v.user.email.required">Email is required</span>
                                        <span v-if="!$v.user.email.email">Email is invalid</span>
                                    </div>
                                    <div class="clear">
                                        <button class="theme-btn-one btn_md" name="subscribe">
                                            <i class="icon-cursor"></i> Send email
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- CopyRight Area -->
    <section id="copyright_one">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="copyright_left">
                        <h6>© CopyRight 2025 <span>Opendart</span></h6>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="copyright_right">
                        <img :src="require('@/assets/img/common/payment.png')" alt="img" />
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
                email: "",
            },
            submitted: false
        }
    },

    validations: {
        user: {
            email: { required, email }
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
            alert("Thanks for Subscribe newsletter!");
        }
    },
}
</script>

<style scoped>
/* Base Footer Styles */
#footer_one {
  background-color: var(--bg-secondary);
  padding: 60px 0;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

#copyright_one {
  background-color: var(--bg-primary);
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

/* Text Colors */
.footer_left_side p,
.footer_one_widget h3,
.copyright_left h6 {
  color: var(--text-primary);
}

.footer_one_widget ul li a,
.copyright_left h6 span {
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.footer_one_widget ul li a:hover {
  color: var(--primary-color);
}

/* Form Elements */
.subscribe-form input {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.subscribe-form .theme-btn-one {
  background-color: var(--primary-color);
  color: white;
}

.subscribe-form .theme-btn-one:hover {
  background-color: var(--active-color);
}

/* Social Icons */
.footer_left_side_icon ul li a {
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
}

.footer_left_side_icon ul li a:hover {
  background-color: var(--primary-color);
  color: white;
}

/* Payment Image */
.copyright_right img {
  filter: var(--payment-filter);
}
</style>