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

        <!-- Privacy-Area -->
        <section id="privacy-policy_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="privacy_content">
                        <h2>What personal data we collect and why we collect it</h2>
                        <div class="privacy_policy_text">
                            <h3>Comments</h3>
                            <p>When visitors leave comments on the site we collect the data shown in the comments form, 
                                and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The service privacy policy is available. After approval of your comment,
                                your profile picture is visible to the public in the context of your comment.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>Media</h3>
                            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>Cookies</h3>
                            <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details 
                                again when you leave another comment. These cookies will last for one year.</p>
                            <p>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is
                                discarded when you close your browser.</p>
                            <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. 
                                If you log out of your account, the login cookies will be removed.</p>
                            <p>If you edit or publish an article, an additional cookie will be saved in your browser. 
                                This cookie includes no personal data and simply indicates the post ID of the article you just edited.
                                It expires after 1 day.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>Embedded content from other websites</h3>
                            <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other
                                websites behaves in the exact same way as if the visitor has visited the other website.</p>
                            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking
                                your interaction with the embedded content if you have an account and are logged in to that website.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>How long we retain your data</h3>
                            <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and 
                                approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                            <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). 
                                Website administrators can also see and edit that information.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>What rights you have over your data</h3>
                            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. 
                                This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    name: 'privacy-policy',
    
    data() {
        return {

            title: 'Privacy Policy',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Privacy Policy'
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
            content: 'Privacy Policy page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>