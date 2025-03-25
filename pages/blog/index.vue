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

    <!-- Blog Area -->
    <section id="blog_grid_area_one" class="ptb-100">
        <div class="container">
            <div class="row">
                <div v-for="blogItem in blogItems" :key="blogItem.id" class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <BlogItem1 :blogThumb="blogItem.blogThumb" :blogTitle="blogItem.blogTitle" :blogDescription="blogItem.blogDescription" :blogPublishDate="blogItem.blogPublishDate" />
                </div>
                <div class="col-lg-12">
                    <!-- pagination start -->
                    <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
                    <!-- pagination end -->
                </div>
            </div>
        </div>
    </section>  
  </div>
</template>

<script>
import BlogItem1 from '~/components/blog/BlogItem1'

export default {
    name: 'Blog',
    components: {
        BlogItem1
    },
    data() {
        return {

            title: 'Blog',

            // Blog Items Data 
            blogItems: [
                {
                    id: 1,
                    blogThumb: require('assets/img/blog/post1.png'),
                    blogTitle: 'This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!',
                    blogDescription: 'Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been',
                    blogPublishDate: '24 February 2021'
                },
                {
                    id: 2,
                    blogThumb: require('assets/img/blog/post2.png'),
                    blogTitle: '4 Fresh Ways To Style Leather Shorts For Spring',
                    blogDescription: 'We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation',
                    blogPublishDate: '29 jan 2018'
                },
                {
                    id: 3,
                    blogThumb: require('assets/img/blog/post3.png'),
                    blogTitle: 'Shopbop Spring Sale Selects All Under Around $100!',
                    blogDescription: 'STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).',
                    blogPublishDate: '24 February 2021'
                },
                {
                    id: 4,
                    blogThumb: require('assets/img/blog/post4.png'),
                    blogTitle: 'This Made Me Splurge on The Apple Watch',
                    blogDescription: 'From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there.',
                    blogPublishDate: '21 February 2019'
                },
                {
                    id: 5,
                    blogThumb: require('assets/img/blog/post5.png'),
                    blogTitle: 'This Designer Bronzer Has Even Buyers Splurging!',
                    blogDescription: 'Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys',
                    blogPublishDate: '24 February 2021'
                },
                {
                    id: 6,
                    blogThumb: require('assets/img/blog/post6.png'),
                    blogTitle: '4 Tips for A Colorful Easter Tablescape',
                    blogDescription: 'Spring is all about the colors! Especially after what feels like an endless winter, I catch myself craving more color than usual.',
                    blogPublishDate: '24 February 2021'
                },
                {
                    id: 7,
                    blogThumb: require('assets/img/blog/post7.png'),
                    blogTitle: 'Hawaii Couples Trip Guide and Spring Break Faves',
                    blogDescription: 'After every trip to Hawaii, I always have a few DMs asking where we stayed, our favorite beaches, etc. Especially with spring break around the corner.',
                    blogPublishDate: '24 February 2021'
                },
                {
                    id: 8,
                    blogThumb: require('assets/img/blog/post8.png'),
                    blogTitle: 'If You Struggle To Hit Your Goals, Try This Instead',
                    blogDescription: 'This year, instead of setting grand, lofty goals and New Years Resolutions, I realized that I respond better to smaller targets that I can cross',
                    blogPublishDate: '24 February 2021'
                },
                {
                    id: 9,
                    blogThumb: require('assets/img/blog/post9.png'),
                    blogTitle: 'The Luxury Winter Accessory That’s Trending Now',
                    blogDescription: 'No matter what you spend on your wardrobe, there are three pieces that can always elevate your look – shoes, handbags, and sunglasses.',
                    blogPublishDate: '24 February 2021'
                }
            ],

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Blog',
                    to: '/blog'
                }
            ],
            
            // Pagination Data 
            rows: 60,
            currentPage: 1

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
            content: 'Blog page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>