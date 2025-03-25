<template>
  <div>
    <div class="left-sidebar shop-sidebar-wrap">
      <!-- Sidebar single item -->
      <div class="sidebar-widget">
        <h3 class="sidebar-title mt-0">Search</h3>
        <div class="search-widget">
            <form>
                <div class="input-group">
                    <input class="form-control" placeholder="Search entire store here ..." type="text" />
                    <button><i class="fas fa-search"></i></button>
                </div>
            </form>
        </div>
      </div>
      <!-- Sidebar single item -->

      <!-- Sidebar single item -->
      <div class="sidebar-widget mt-40px">
        <h3 class="sidebar-title">Categories</h3>
        <div class="category-post">
            <ul>
                <li><a href="#" class="selected">All <span>(4)</span> </a></li>
                <li><a href="#" class="">Accesssories <span>(3)</span> </a></li>
                <li><a href="#" class="">Box <span>(5)</span> </a></li>
                <li><a href="#" class="">chair <span>(2)</span> </a></li>
                <li><a href="#" class="">Deco <span>(6)</span> </a></li>
                <li><a href="#" class="">Furniture <span>(4)</span> </a></li>
                <li><a href="#" class="">Glass <span>(1)</span> </a></li>
                <li><a href="#" class="">Sofa <span>(3)</span> </a></li>
                <li><a href="#" class="">Table <span>(4)</span> </a></li>
            </ul>
        </div>
      </div>
      <!-- Sidebar single item -->

      <div class="sidebar-widget mt-40px">
        <h3 class="sidebar-title">Recent Post</h3>
        <div class="recent-post-widget">

            <div v-for="blogItem in blogItems" :key="blogItem.id" class="recent-single-post d-flex">
              <div class="thumb-side img-zoom-hover">
                  <nuxt-link :to="'/blog/'+blogItem.blogTitle"><img :src="blogItem.blogThumb" alt="img" /></nuxt-link>
              </div>
              <div class="media-side">
                  <h5>
                  <nuxt-link :to="'/blog/'+blogItem.blogTitle">{{blogItem.blogTitle.substring(0,25)+"..." }}</nuxt-link>
                  </h5>
                  <span class="date">{{blogItem.blogPublishDate}}</span>
              </div>
            </div>

        </div>
      </div>
      <!-- Sidebar single item -->

      <div class="sidebar-widget mt-40px">
        <h3 class="sidebar-title">Tags</h3>

        <div class="sidebar-widget-tag d-inline-block">
            <ul>
            <li><a href="#">Food</a></li>
            <li><a href="#">Hungry</a></li>
            <li><a href="#">Water</a></li>
            <li><a href="#">Shool</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Children</a></li>
            <li><a href="#">selter</a></li>
            </ul>
        </div>
      </div>
      <!-- Sidebar single item -->

    <!-- Sidebar single item -->
    <div class="follow-widget mt-40px">
        <h3 class="sidebar-title">Follow Us</h3>
        <div class="follwos_icons">
            <ul>
                <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
            </ul>
        </div>
    </div>
    <!-- Sidebar single item -->
    
    <!-- Sidebar single item -->
    <div class="bio-widget mt-40px">
        <h3 class="sidebar-title">About Blog</h3>
        <div class="follwos_icons">
            <a href="#!">
                <img src="~/assets/img/common/nav_banner.png" alt="img">
            </a>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                Vivamus suscipit tortor.</p>
        </div>
    </div>
    <!-- Sidebar single item -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogSidebar2',
  data() {
    return {
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
          }
      ],

      // Instagram Slider Items Data 
      instagramItems: [
          {
              id: 1,
              instagramImg: require('@/assets/img/instagram/post2.png')
          },
          {
              id: 2,
              instagramImg: require('@/assets/img/instagram/post3.png')
          },
          {
              id: 3,
              instagramImg: require('@/assets/img/instagram/post4.png')
          },
          {
              id: 4,
              instagramImg: require('@/assets/img/instagram/post5.png')
          },
          {
              id: 5,
              instagramImg: require('@/assets/img/instagram/post6.png')
          },
          {
              id: 6,
              instagramImg: require('@/assets/img/instagram/post7.png')
          },
          {
              id: 7,
              instagramImg: require('@/assets/img/instagram/post8.png')
          },
          {
              id: 8,
              instagramImg: require('@/assets/img/instagram/post9.png')
          },
          {
              id: 9,
              instagramImg: require('@/assets/img/instagram/post10.png')
          },
          {
              id: 10,
              instagramImg: require('@/assets/img/instagram/post11.png')
          },
          {
              id: 11,
              instagramImg: require('@/assets/img/instagram/post12.png')
          },
          {
              id: 12,
              instagramImg: require('@/assets/img/instagram/post1.png')
          }
      ]

    }
  }

}
</script>

<style>

</style>