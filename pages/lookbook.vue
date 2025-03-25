<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lookbook-Area -->
    <section id="lookbook_area" class="lookbook ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="lookbook-block">
              <div class="img-width">
                <img
                  :src="require('@/assets/img/common/lookbook.jpg')"
                  alt="img"
                />
              </div>
              <div class="lookbook-dot">
                <span>1</span>
                <a href="#">
                  <div class="dot-showbox">
                    <img
                      :src="require('@/assets/img/product-image/1.png')"
                      alt="img"
                    />
                    <div class="dot-info">
                      <h5 class="title">tee</h5>
                      <h5>200$</h5>
                      <h6>details</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div class="lookbook-dot dot2">
                <span>2</span>
                <a href="#">
                  <div class="dot-showbox">
                    <img
                      :src="require('@/assets/img/product-image/2.png')"
                      alt="img"
                    />
                    <div class="dot-info">
                      <h5 class="title">tee</h5>
                      <h5>200$</h5>
                      <h6>details</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="lookbook-block">
              <div class="img-width">
                <img
                  :src="require('@/assets/img/common/lookbook2.jpg')"
                  alt="img"
                />
              </div>
              <div class="lookbook-dot dot3">
                <span>1</span>
                <a href="#">
                  <div class="dot-showbox">
                    <img
                      :src="require('@/assets/img/product-image/4.png')"
                      alt="img"
                    />
                    <div class="dot-info">
                      <h5 class="title">tee</h5>
                      <h5>200$</h5>
                      <h6>details</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div class="lookbook-dot dot4">
                <span>2</span>
                <a href="#">
                  <div class="dot-showbox">
                    <img
                      :src="require('@/assets/img/product-image/5.png')"
                      alt="img"
                    />
                    <div class="dot-info">
                      <h5 class="title">tee</h5>
                      <h5>200$</h5>
                      <h6>details</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <InstagramArea />
  </div>
</template>
  
  <script>
import InstagramArea from "../components/instagram/InstagramArea";
export default {
  name: "lookbook",
  components: {
    InstagramArea,
  },

  data() {
    return {
      title: "lookbook",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Lookbook",
          to: "/lookbook",
        },
      ],

      // Product Quanity Increment/ Decrement Data
      quantity: 1,
    };
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "lookbook",
          name: "lookbook",
          content: "Lookbook - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>