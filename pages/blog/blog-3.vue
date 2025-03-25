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
    <section id="blog_list_area" class="ptb-100">
        <div class="container">
            <div class="row">
                <div v-for="blogItem in blogItems" :key="blogItem.id" class="col-lg-12 col-md-6 col-sm-6 col-12">
                    <BlogItem2 :blogThumb="blogItem.blogThumb" :blogTitle="blogItem.blogTitle" :blogDescription="blogItem.blogDescription" :blogPublishDate="blogItem.blogPublishDate" />
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
import BlogItem2 from '~/components/blog/BlogItem2'

export default {
    name: 'blog-list',
    components: {
        BlogItem2
    },
    data() {
        return {
            title: this.title,

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
                    to: '/blog/blog-3'
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
