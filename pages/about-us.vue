<template>
  <div>
        <!-- Banner Area -->
        <section id="common_banner_one">
            <div class="container">
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

        <!-- About-Top -->
        <section id="about-top" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="about_top_img">
                            <img src="~/assets/img/common/img-about.png" alt="img">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="about_top_left_content">
                            <h2>About DefineX</h2>
                            <h4>We are defining next.</h4>
                            <p>DefineX is a new generation consulting house and a venture builder that designs and builds the enablers of digital acceleration for the world.
                              Founded by former teams from a leading Global Consulting Company, DefineX emerged in 2019 to define the next
                              and revolutionize the consulting landscape with a fresh, new way of thinking.</p>
                              <br/>
                              <br/>
                            <p>We help our clients stay ahead by reinventing themselves in the age of digital disruption. Our vision is to
                              serve the business world through agendas designed to bring impactful solutions to pressing business problems.
                              We help our clients solve new business problems, create disruptive products, and integrate next-generation digital solutions.
                              With a track record of shaping visionary strategies, solving challenging business issues, designing innovative solutions,
                              and delivering technology transformation projects, we are known for our industry expertise and rigorous focus on client success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    

        <!-- Service Promo -->
        <section id="service_promo_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service_promo_single_item">
                            <div class="service_prom_image">
                                <img src="~/assets/img/icon/icon_about1.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>Creative Always</h3>
                                <p>Stay creative with Billey and the huge collection of premade elements, layouts &amp;
                                    effects.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service_promo_single_item">
                            <div class="service_prom_image">
                                <img src="~/assets/img/icon/icon_about2.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>Express Customization</h3>
                                <p>Easy to install and configure the theme customization in a few clicks with Billey.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service_promo_single_item">
                            <div class="service_prom_image">
                                <img src="~/assets/img/icon/icon_about3.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>Premium Integrations</h3>
                                <p>Integrated premium plugins in Billey is the secret weapon for your business to thrive.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service_promo_single_item">
                            <div class="service_prom_image">
                                <img src="~/assets/img/icon/icon_about4.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>Real-time Editing</h3>
                                <p>Edit your work and preview the changes on the screen live with advanced page builder.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Area -->
        <section id="team_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="center_heading">
                            <h2>Our Expert Team</h2>
                            <p>Our staff, each of whom is an expert in their field</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <carousel class="team_slider" :autoplay="true" :loop="true" :nav="false" :dots="false" :smartSpeed="1000" :margin="30"
                         :responsive="{0:{items:1},600:{items:2},992:{items:3},1200:{items:4}}">

                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team5.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Abdulsamet Kıyak</h4>
                                    <h5 class="team-title">Backend Developer</h5>
                                  <ul class="team-social pos-absolute">
                                    <li><a href="https://www.github.com/sametkayik"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sametkayik"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/sametkayk/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team1.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Samet Kıyak</h4>
                                    <h5 class="team-title">Frontend Developer</h5>
                                    <ul class="team-social pos-absolute">
                                      <li><a href="https://www.github.com/sametkayik"><i class="fab fa-github"></i></a></li>
                                      <li><a href="https://www.linkedin.com/in/sametkayik"><i class="fab fa-linkedin"></i></a></li>
                                      <li><a href="https://www.instagram.com/sametkayk/"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team2.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Abdulsamet Kayıkçı</h4>
                                    <h5 class="team-title">Database Administrator</h5>
                                  <ul class="team-social pos-absolute">
                                    <li><a href="https://www.github.com/sametkayik"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sametkayik"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/sametkayk/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team3.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Samet Kıyakçı</h4>
                                    <h5 class="team-title">UI/UX Designer</h5>
                                  <ul class="team-social pos-absolute">
                                    <li><a href="https://www.github.com/sametkayik"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sametkayik"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/sametkayk/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team4.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Abdulsamet Kayık</h4>
                                    <h5 class="team-title">Fullstack Developer</h5>
                                  <ul class="team-social pos-absolute">
                                    <li><a href="https://www.github.com/sametkayik"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sametkayik"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/sametkayk/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team6.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Samet Kayık</h4>
                                    <h5 class="team-title">DevOps Engineer</h5>
                                  <ul class="team-social pos-absolute">
                                    <li><a href="https://www.github.com/sametkayik"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sametkayik"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/sametkayk/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                                </div>
                            </div>
                        </carousel>

                    </div>
                </div>
            </div>
        </section> 

        <!-- Instagram Arae -->
        <InstagramArea class="pt-100" />
  </div>
</template>

<script>
import InstagramArea from '~/components/instagram/InstagramArea'
import carousel from 'vue-owl-carousel'

export default {
    name: 'about-us',
    components: {
        InstagramArea,
        carousel
    },
    data() {
        return {
            title: 'About Us',
            
            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'About'
                }
            ],
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
            content: 'About Us page - DefineX Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>

<style scoped>
/* Team Area Dark Mode Styles */
#team_area {
  background-color: var(--bg-secondary);
}

.center_heading h2 {
  color: var(--text-primary);
}

.center_heading p {
  color: var(--text-secondary);
}

.team-single {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
}

.team-content {
  background-color: var(--bg-primary);
}

.team-name {
  color: var(--text-primary) !important;
}

.team-title {
  color: var(--text-secondary);
}

.team-social li a {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.team-social li a:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Carousel Navigation */
.owl-carousel .owl-nav button {
  color: var(--text-primary) !important;
  background: var(--bg-primary) !important;
  border: 1px solid var(--border-color) !important;
}

.owl-carousel .owl-nav button:hover {
  background: var(--primary-color) !important;
  color: white !important;
}
</style>