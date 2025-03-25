<template>
    <div>
        <!-- Banner Area -->
        <section id="common_banner_one">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="common_banner_text">
                            <h2>Blog Single</h2>
                            <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Single Area -->
        <section id="blog_single_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="blog_single_content">
                            <div class="blog_single_img img-zoom-hover">
                                <img src="~/assets/img/blog/blog_single2.png" alt="img" />
                            </div>
                            <div class="blog_single_widget">
                                <div class="blog_single_date">
                                    <ul>
                                        <li>Sep, 28, 2020 - By <a href="#!"> Anla Xolex</a></li>
                                    </ul>
                                </div>
                                <div class="blog_single_first_Widget">
                                    
                                    <h2 v-if="this.$route.params.slug">{{this.$route.params.slug}}</h2>
                                    <h2 v-else>Black T-Shirt For Woman</h2>
                                    
                                    <p>
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                                    orci porta dapibus. Vivamus magna justo, lacinia eget
                                    consectetur sed, convallis at tellus. Sed porttitor lectus
                                    nibh.
                                    </p>
                                    <p>
                                    Sed porttitor lectus nibh. Vivamus suscipit tortor eget
                                    felis porttitor volutpat. Curabitur aliquet quam id dui
                                    posuere blandit. Cras ultricies ligula sed magna dictum
                                    porta. Sed porttitor lectus nibh. Vivamus suscipit tortor
                                    eget felis porttitor volutpat. Vivamus suscipit tortor eget
                                    felis porttitor volutpat. Nulla porttitor accumsan
                                    tincidunt. Curabitur aliquet quam id dui posuere blandit.
                                    Curabitur aliquet quam id dui posuere blandit. Praesent
                                    sapien massa, convallis a pellentesque nec, egestas non
                                    nisi.
                                    </p>
                                    <blockquote>
                                    Praesent sapien massa, convallis a pellentesque nec, egestas
                                    non nisi. Curabitur arcu erat, accumsan id imperdiet et,
                                    porttitor at sem. Donec rutrum congue leo eget malesuada.
                                    Sed porttitor lectus nibh.
                                    </blockquote>
                                    <p>
                                    Quisque velit nisi, pretium ut lacinia in, elementum id
                                    enim. Curabitur arcu erat, accumsan id imperdiet et,
                                    porttitor at sem. Vivamus magna justo, lacinia eget
                                    consectetur sed, convallis at tellus. Vestibulum ante ipsum
                                    primis in faucibus orci luctus et ultrices posuere cubilia
                                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                                    ullamcorper sit amet ligula. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia Curae;
                                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                    sit amet ligula. Proin eget tortor risus. Proin eget tortor
                                    risus. Curabitur aliquet quam id dui posuere blandit. Donec
                                    rutrum congue leo eget malesuada.
                                    </p>
                                </div>
                                <div class="single_categoris_bottom">
                                    <ul>
                                    <li><a href="#!">Fashion</a></li>
                                    <li><a href="#!">Style</a></li>
                                    <li><a href="#!">Woman</a></li>
                                    <li><a href="#!">Man</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="related_blogs">
                                <div class="row">
                                    <div v-for="blogItem in blogItems.slice(0, 2)" :key="blogItem.id" class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <BlogItem1 :blogThumb="blogItem.blogThumb" :blogTitle="blogItem.blogTitle" :blogDescription="blogItem.blogDescription" :blogPublishDate="blogItem.blogPublishDate" />
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card post_author">
                                <div class="card-body">
                                    <div class="author_img">
                                    <img src="~/assets/img/user/author.png" alt="author" />
                                    </div>
                                    <div class="author_info">
                                    <h6 class="author_name">
                                        <a href="#" class="mb-1 d-inline-block">Maria Redwood</a>
                                    </h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div class="single_comment_area">
                                <div class="content_title">
                                    <h3>(03) Comments</h3>
                                </div>
                                <ul class="list_none comment_list">
                                    <li class="comment_info">
                                        <div class="d-flex">
                                            <div class="comment_user">
                                                <img src="~/assets/img/user/user3.png" alt="user3" />
                                            </div>
                                            <div class="comment_content">
                                                <div class="d-flex">
                                                    <div class="meta_data">
                                                    <h6><a href="#">Alden Smith</a></h6>
                                                    <div class="comment-time">
                                                        MARCH 5, 2018, 6:05 PM
                                                    </div>
                                                    </div>
                                                    <div class="ml-auto">
                                                    <a href="#" class="comment-reply">Reply</a>
                                                    </div>
                                                </div>
                                                <p>
                                                    We denounce with righteous indignation and dislike men
                                                    who are so beguiled and demoralized by the charms of
                                                    pleasure of the moment, so blinded by desire that the
                                                    cannot foresee the pain and trouble that.
                                                </p>
                                            </div>
                                        </div>
                                        <ul class="children">
                                            <li class="comment_info">
                                                <div class="d-flex">
                                                    <div class="comment_user">
                                                    <img src="~assets/img/user/user1.png" alt="user1" />
                                                    </div>
                                                    <div class="comment_content">
                                                    <div class="d-flex align-items-md-center">
                                                        <div class="meta_data">
                                                        <h6><a href="#">Daisy Lana</a></h6>
                                                        <div class="comment-time">
                                                            april 8, 2018, 5:15 PM
                                                        </div>
                                                        </div>
                                                        <div class="ml-auto">
                                                        <a href="#" class="comment-reply"><i class="ion-reply-all"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        We denounce with righteous indignation and dislike
                                                        men who are so beguiled and demoralized by the
                                                        charms of pleasure of the moment, so blinded by
                                                        desire that the cannot foresee the pain and
                                                        trouble that.
                                                    </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="comment_info">
                                        <div class="d-flex">
                                            <div class="comment_user">
                                            <img src="~/assets/img/user/user2.png" alt="user2" />
                                            </div>
                                            <div class="comment_content">
                                            <div class="d-flex">
                                                <div class="meta_data">
                                                <h6><a href="#">John Becker</a></h6>
                                                <div class="comment-time">
                                                    april 15, 2018, 10:30 PM
                                                </div>
                                                </div>
                                                <div class="ml-auto">
                                                <a href="#" class="comment-reply">Reply</a>
                                                </div>
                                            </div>
                                            <p>
                                                We denounce with righteous indignation and dislike men
                                                who are so beguiled and demoralized by the charms of
                                                pleasure of the moment, so blinded by desire that the
                                                cannot foresee the pain and trouble that.
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="comment_replay_box">
                                <div class="content_title">
                                    <h3>Write a comment</h3>
                                </div>
                                <form class="field_form">
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <input name="name" class="form-control" placeholder="Your Name" required="required" type="text" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <input name="email" class="form-control" placeholder="Your Email" required="required"
                                            type="email" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <input name="website" class="form-control" placeholder="Your Website" required="required"
                                            type="text" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea rows="3" name="message" class="form-control" placeholder="Your Comment"
                                            required="required"></textarea>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <button name="submit" class="theme-btn-one btn_md btn-black-overlay"
                                                title="Submit Your Message!">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <BlogSidebar2 />
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import BlogItem1 from '~/components/blog/BlogItem1'
import BlogSidebar2 from '~/components/blog/BlogSidebar2'

export default {
    name: 'blog-single-2',
    components: {
        BlogItem1,
        BlogSidebar2
    },
    data() {
        return {

            title: this.$route.params.slug,

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
                    blogTitle: 'Shopbop Spring Sale Selects (All Under/Around $100!)',
                    blogDescription: 'STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).',
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
                    text: 'Blog Single',
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
            content: 'Blog Single page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>