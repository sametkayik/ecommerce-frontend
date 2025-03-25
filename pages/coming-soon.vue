<template>
      <!-- Coming Soon Area -->
    <section id="coming_soon_area" class="ptb-100">
        <div class="container">
            <div class="row">
               <div class="col-lg-8 offset-lg-2">
                   <div class="coming_soon_content">
                      <nuxt-link to="/"><img src="~/assets/img/logo-white.png" alt="coming-soon"></nuxt-link>
                       <div class="coming_soon_title">
                           <h2>We Are Coming Soon</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text.</p>
                       </div>
                       <div class="coming_soon_time">
                        <div id="countdown_soon">
                            <Timer date="October 15, 2025" />
                        </div>
                       </div>
                       <div class="coming_soon_newsletter">
                           <h3>Subscribe for our next update</h3>
                            <form>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Your Email">
                                    <button type="button" class="theme-btn-one btn-black-overlay btn_md">Subscribe</button>
                                </div>
                            </form>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </section>  
</template>

<script>

import Timer from '../components/widgets/Timer'

export default {
    layout: 'headless-layout',
    name: 'coming-soon',

    components: {
        Timer
    },
    
    data() {
        return {
            title: 'Coming Soon',
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
            content: 'Coming Soon page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>