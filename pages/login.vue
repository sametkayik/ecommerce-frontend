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

    <!-- Login-Area -->
    <section id="login_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div class="account_form">
              <h3>Login</h3>
              <form @submit.prevent="handleSubmit">
                <div class="default-form-box">
                  <label>Username or email <span>*</span></label>
                  <input id="username" v-model="user.username"
                         :class="{ 'is-invalid': submitted && $v.user.username.$error }" class="form-control"
                         name="username"
                         type="text"/>
                  <div v-if="submitted && !$v.user.username.required" class="invalid-feedback">Username or Email is
                    required
                  </div>
                </div>

                <div class="default-form-box">
                  <label for="password">Password</label>
                  <input id="password" v-model="user.password"
                         :class="{ 'is-invalid': submitted && $v.user.password.$error }" class="form-control"
                         name="password"
                         type="password"/>
                  <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                    <h5 v-if="!$v.user.password.required">Password is required</h5>
                    <h5 v-if="!$v.user.password.minLength">Password must be at least 6 characters</h5>
                  </div>
                </div>

                <div class="login_submit">
                  <button class="theme-btn-one btn-black-overlay btn_md">login</button>
                </div>

                <div class="remember_area">
                  <label class="checkbox-default">
                    <input type="checkbox">
                    <h5>Remember me</h5>
                  </label>
                </div>

                <nuxt-link to="/register">Create Your Account?</nuxt-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'Login',
  data() {
    return {
      title: 'Login',
      breadcrumbItems: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Login'
        }
      ],
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
      username: {required},
      password: {required, minLength: minLength(6)},
    }
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0)
  },
  methods: {
    async handleSubmit(e) {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      try {
        const formData = new URLSearchParams()
        formData.append('client_id', 'DefineX')
        formData.append('client_secret', 'secret')
        formData.append('grant_type', 'password')
        formData.append('username', this.user.username)
        formData.append('password', this.user.password)
        formData.append('scope', 'DefineX')

        const response = await this.$axios.post('http://localhost:44365/connect/token', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        this.$store.commit('auth/SET_TOKEN', response.data.access_token)
        this.$router.push('/')
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message)
      }
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
          content: 'Login page - AndShop Ecommerce Vue js, Nuxt js Template'
        }
      ]
    }
  }

}
</script>