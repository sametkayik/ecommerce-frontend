<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="footer_left_side">
                        <nuxt-link to="/"><img :src="require('@/assets/img/logo.png')" alt="logo" /></nuxt-link>
                        <p>
                            BT SHOP çok satıcılı bir B2C hızlı e-ticaret şirketidir. Şirket ağırlıklı olarak erkek, kadın ve çocuk giyimine odaklanmaktadır. ama aynı zamanda başka giysiler, giysiler, aksesuarlar, ayakkabılar, çantalar ve diğer moda ürünleri de sunuyoruz.
                        </p>
                        <div class="footer_left_side_icon">
                            <ul>
                                <li>
                                    <a href="#!"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="footer_one_widget">
                        <h3>BİLGİ</h3>
                        <ul>
                            <li><nuxt-link to="/">Anasayfa</nuxt-link></li>
                            <li><nuxt-link to="/about-us">Hakkımızda</nuxt-link></li>
                            <li><nuxt-link to="/my-account/order-tracking">Sipariş Takibi</nuxt-link></li>
                        </ul>
                    </div>
                </div>
 
                <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="footer_one_widget">
                        <h3>BÜLTEN</h3>
                        <div id="mc_embed_signup" class="subscribe-form">
                            <form @submit.prevent="handleSubmit">
                                <div class="mc-form">
                                    <input class="form-control" type="email" v-model="user.email" id="email" name="email" placeholder="Email Adresiniz" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                        <span v-if="!$v.user.email.required">Email is required</span>
                                        <span v-if="!$v.user.email.email">Email is invalid</span>
                                    </div>
                                    <div class="clear">
                                        <button class="theme-btn-one btn_md" name="subscribe">
                                            <i class="icon-cursor"></i> Email Gönder
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