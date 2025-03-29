<template>
  <div>
    <!-- Start Header Area -->
    <header class="header-section d-none d-xl-block" :class="{'dark-header': $store.state.darkMode}">
      <div class="header-wrapper">
        <div id="header" class="
            header-bottom
            sticky-header"
            :class="{
            'dark-mode': $store.state.darkMode
          }">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex align-items-center justify-content-between">
                <!-- Start Header Logo -->
                <div class="header-logo">
                  <div class="logo">
                    <nuxt-link to="/">
                   <img 
                  :src="$store.state.darkMode ? require('@/assets/img/light-logo.png') : require('@/assets/img/logo.png')" 
                  alt="logo"
                />
                    </nuxt-link>
                  </div>
                </div>
                <!-- End Header Logo -->

                <!-- Start Header Main Menu -->
                <div class="main-menu" :class="{ 'dark-mode': $store.state.darkMode }">
                  <nav>
                    <ul>
                      <li>
                        <nuxt-link to="/shop">Shop</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="/about-us">About Us</nuxt-link>
                      </li>

                      <li>
                          <nuxt-link to="/contact-us">Contact Us</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="/my-account">Dashboard</nuxt-link>
                      </li>
                    </ul>
                  

                  </nav>
                </div>
                <!-- End Header Main Menu Start -->

                <!-- Start Header Action Link -->
                <ul class="
                    header-action-link
                    action-color--black
                    action-hover-color--golden
                  ">
                  <li>
                    <button
                            @click="toggleDarkMode"
                            class="dark-mode-toggle"
                            :class="{ 'dark': isDarkMode }"
                            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
                        >
                          <h5 class="sun" aria-hidden="true">🌞</h5>
                          <h5 class="moon" aria-hidden="true">🌙</h5>
                        </button>
                  </li>
                  <li>
                    <a v-b-toggle.offcanvas-wishlish class="offcanvas-toggle">
                      <i class="far fa-heart" :class="{ 'dark-mode' : $store.state.darkMode }"></i>
                      <span class="item-count">{{ wishlist.length }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-b-toggle.offcanvas-add-cart class="offcanvas-toggle">
                      <i class="fas fa-shopping-bag" :class="{ 'dark-mode' : $store.state.darkMode }"></i>
                      <span class="item-count">{{ cart.length }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-b-toggle.offcanvas-about class="offacnvas offside-about offcanvas-toggle" :class="{ 'dark': isDarkMode }"><i
                        class="fas fa-bars"></i></a>
                  </li>
                </ul>
                <!-- End Header Action Link -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Start Header Area -->

    <!-- Start Mobile Header -->
    <div id="mobile_header" class="
        mobile-header
        sticky-header
        sticky-color--golden
        mobile-header-bg-color--golden
        section-fluid
        d-lg-block d-xl-none
      ">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-between">
            <!-- Start Mobile Left Side -->
            <div class="mobile-header-left">
              <ul class="mobile-menu-logo">
                <li>
                  <nuxt-link to="/">
                    <div class="logo">
                      <img :src="require('@/assets/img/logo.png')" alt="logo"/>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <!-- End Mobile Left Side -->

            <!-- Start Mobile Right Side -->
            <div class="mobile-right-side">
              <ul class="
                  header-action-link
                  action-color--black
                  action-hover-color--golden
                ">
                <li>
                  <a v-b-toggle.search_sidebar class="search_width offcanvas-toggle">
                    <img alt="img" src="~/assets/img/svg/search.svg"/>
                  </a>
                </li>
                <li>
                  <a v-b-toggle.offcanvas-wishlish class="offcanvas-toggle">
                    <i class="far fa-heart" :class="{ 'dark-mode' : $store.state.darkMode }"></i>
                    <span class="item-count">{{ wishlist.length }}</span>
                  </a>
                </li>
                <li>
                  <a v-b-toggle.offcanvas-add-cart class="offcanvas-toggle">
                    <i class="fas fa-shopping-bag" :class="{ 'dark-mode' : $store.state.darkMode }"></i>
                    <span class="item-count">{{ cart.length }}</span>
                  </a>
                </li>
                <li>
                  <a v-b-toggle.offcanvas-about class="offacnvas offside-about offcanvas-toggle" :class="{ 'dark-mode' : $store.state.darkMode }"><i
                      class="fas fa-bars"></i></a>
                </li>
              </ul>
            </div>
            <!-- End Mobile Right Side -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Mobile Header -->

    <!-- ...:::: Start Offcanvas Mobile Menu Section:::... -->
    <b-sidebar id="offcanvas-about" backdrop class="offcanvas-mobile-about-section" right :class="{'dark-header': $store.state.darkMode}">
      <!-- Start Mobile Menu Navbar Wrap -->
      <div class="mobile-menu-navbar-wrap">
        <!-- Start Mobile Menu Nav -->
        <div class="offcanvas-menu">
          <sidebar-menu :menu="menu"/>
        </div>
        <!-- End Mobile Menu Nav -->
      </div>
      <!-- End Mobile Menu Navbar Wrap -->

      <!-- Start Mobile contact Info -->
      <div class="mobile-contact-info">
        <address class="address">
          <img :src="require('@/assets/img/logo-white.png')" alt="logo"/>
          <ul>
            <li class="address_location">
              <a href="https://maps.app.goo.gl/5s1Unkrg4GEuJgQz9" >Kuruçeşme Mahallesi Arnavutköy Kuruçeşme Caddesi No 3/4 Beşiktaş/İstanbul</a>
            </li>
            <br/>
            <li class="address_location">
              <div class="contact_widget">
                <a href="tel:2129425060">(0212) 942 50 60</a>
              </div>
              <br/>
            </li>
            <li class="address_location">
              <div class="contact_widget">
                <a href="mailto:talentacquisition@teamdefinex.com">talentacquisition@teamdefinex.com</a>
              </div>
            </li>
          </ul>
        </address>

        <ul class="social-link">
            <li><a href="https://x.com/DefinexGlobal"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/company/definex-consulting-technology-labs/"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/teamdefinex/"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com/@teamdefineX"><i class="fab fa-youtube"></i></a></li>
        </ul>

        <ul class="user-link">
          <li>
            <nuxt-link to="/my-account/wishlist">Favorites</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/cart/">Cart</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my-account/checkout-1">Complete Order</nuxt-link>
          </li>
        </ul>
      </div>
      <!-- End Mobile contact Info -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Start Offcanvas Addcart Section -->
    <b-sidebar id="offcanvas-add-cart" backdrop class="offcanvas-add-cart-section" right>
      <div class="offcanvas-add-cart-wrapper">
        <h4 class="offcanvas-title">Shopping Cart</h4>
        <div v-if="cart.length">
          <ul class="offcanvas-cart">
            <li v-for="(item, index) in cart" :key="item.variantId || index" class="offcanvas-cart-item-single">
              <div class="offcanvas-cart-item-block">
                <nuxt-link :to="{ path: '/product/' + item.id }" class="offcanvas-cart-item-image-link">
                  <img :src="getVariantImage(item)" alt="img" class="offcanvas-cart-image"/>
                </nuxt-link>
                <div class="offcanvas-cart-item-content">
                  <nuxt-link :to="{ path: '/product/' + item.id }" class="offcanvas-cart-item-link">{{
                      item.title
                    }}
                  </nuxt-link>

                  <div v-if="item.color || item.size" class="variant-info">
                    <span v-if="item.color" :style="{ backgroundColor: item.color }" class="color-badge"></span>
                    <span v-if="item.size">Size: {{ item.size }}</span>
                  </div>

                  <div class="offcanvas-cart-item-details">
                    <span class="offcanvas-cart-item-details-quantity">{{ item.quantity }} x</span>
                    <span v-if="item.discount" class="offcanvas-cart-item-details-price">${{
                        discountedPrice(item).toFixed(2)
                      }}</span>
                    <span v-else class="offcanvas-cart-item-details-price">${{ item.price.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
              <div class="offcanvas-cart-item-delete text-right">
                <button class="offcanvas-cart-item-delete bg-transparent remove-btn" @click="removeCartItem(item)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>

          <div class="offcanvas-cart-total-price">
            <span class="offcanvas-cart-total-price-text">Total:</span>
            <span class="offcanvas-cart-total-price-value">${{ cartTotal.toFixed(2) }}</span>
          </div>

          <ul class="offcanvas-cart-action-button">
            <li>
              <nuxt-link class="theme-btn-one btn-black-overlay btn_md" to="/cart">Go to Cart</nuxt-link>
            </li>
            <li>
              <nuxt-link class="theme-btn-one btn-black-overlay btn_md" to="/my-account/checkout-1">Complete Order</nuxt-link>
            </li>
          </ul>
        </div>

        <ul v-else class="offcanvas-cart">
          <li>Sepetiniz Boş!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End  Offcanvas Addcart Section -->

    <!-- Start Offcanvas Wishlist Sidebar Section -->
    <b-sidebar id="offcanvas-wishlish" backdrop class="offcanvas-add-cart-section" right>
      <div class="offcanvas-wishlist-wrapper">
        <h4 class="offcanvas-title">Favorites</h4>
        <div v-if="wishlist.length">
          <ul class="offcanvas-wishlist">
            <li v-for="(item, index) in wishlist" :key="index" class="offcanvas-wishlist-item-single">
              <div class="offcanvas-wishlist-item-block">
                <nuxt-link :to="{ path: '/product/' + item.id }" class="offcanvas-wishlist-item-image-link">
                  <img :src="getImageUrl(item.images[0].src)" alt="img" class="offcanvas-wishlist-image"/>
                </nuxt-link>
                <div class="offcanvas-wishlist-item-content">
                  <nuxt-link :to="{ path: '/product/' + item.id }" class="offcanvas-wishlist-item-link">
                    {{ item.title }}
                    <div v-if="item.color || item.size" class="variant-info">
                  <span v-if="item.color" :style="{ backgroundColor: item.color }"
                        class="color-badge"></span>
                      <span v-if="item.size">{{ item.size }}</span>
                    </div>
                  </nuxt-link>
                  <div class="offcanvas-wishlist-item-details">
                    <span class="offcanvas-wishlist-item-details-price">
                  ${{ discountedPrice(item).toFixed(2) }}
                </span>
                  </div>
                </div>
              </div>
              <div class="offcanvas-wishlist-item-delete text-right">
                <button class="offcanvas-wishlist-item-delete bg-transparent remove-btn"
                        @click="removeWishlistItem(item)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>
          <ul class="offcanvas-wishlist-action-button">
            <li>
              <nuxt-link class="theme-btn-one btn-black-overlay btn_md" to="/my-account/wishlist">
                Go to Favorites
              </nuxt-link>
            </li>
          </ul>
        </div>
        <ul v-else class="offcanvas-wishlist">
          <li>You don't have any favorite products!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Wishlist Sidebar Section -->

    <!-- Start Offcanvas Search Bar Section -->
    <b-sidebar id="search_sidebar" backdrop>
      <div class="
          px-3
          py-2
          search-sidebar-content-wrap
          d-flex
          justify-content-center
          align-content-center
          w-100
          h-100
        ">
        <form class="d-flex flex-column justify-content-center product-search-form">
          <input v-model="searchString" placeholder="Product search" type="search" @keyup="searchProduct"/>
          <button class="btn btn-lg btn-golden">Search</button>

          <!-- Show search product here -->
          <ul v-if="searchItems.length" class="search-results-wrap">
            <li v-for="(product, index) in searchItems" :key="index">
              <div class="offcanvas-cart-item-block mb-3">
                <nuxt-link :to="{ path: '/product/' + product.id }" class="offcanvas-cart-item-image-link">
                  <img :src="getImageUrl(product.images[0].src)" alt="img" class="offcanvas-cart-image"/>
                </nuxt-link>
                <div class="offcanvas-cart-item-content">
                  <nuxt-link :to="{ path: '/product/' + product.id }" class="offcanvas-cart-item-link text-white">{{
                      product.title
                    }}
                  </nuxt-link>
                  <div class="offcanvas-cart-item-details">
                    <span v-if="product.discount" class="offcanvas-cart-item-details-price text-white">${{
                        discountedPrice(product)
                      }}</span>
                    <span v-else class="offcanvas-cart-item-details-price text-white">${{ product.price }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- Show search product here -->
        </form>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Search Bar Section -->
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  data() {
    return {
      menu: [
        {
          title: "Home",
          child: [
            {
              href: "/",
              title: "Fashion",
            },
            {
              href: "/furniture",
              title: "Furniture",
            },
            {
              href: "/electronics",
              title: "Electronics",
            },
          ],
        },
        {
          title: "Shop",
          child: [
            {
              title: "Shop Layout",
              child: [
                {
                  href: "/shop",
                  title: "Shop Four Grid",
                },
                {
                  href: "/shop/shop-2",
                  title: "Shop Three Grid",
                },
                {
                  href: "/shop/shop-3",
                  title: "Shop List View",
                },
                {
                  href: "/shop/shop-4",
                  title: "Shop Left Sidebar",
                },
                {
                  href: "/shop/shop-5",
                  title: "Shop Right Sidebar",
                },
              ],
            },
            {
              title: "Shop Pages",
              child: [
                {
                  href: "/cart/",
                  title: "Cart View One",
                },
                {
                  href: "/cart/cart-2",
                  title: "Cart View Two",
                },
                {
                  href: "/cart/empty-cart",
                  title: "Empty Cart",
                },
                {
                  href: "/my-account/checkout-1",
                  title: "Checkout View One",
                },
                {
                  href: "/my-account/checkout-2",
                  title: "Checkout View Two",
                },
                {
                  href: "/my-account/wishlist",
                  title: "Wishlist",
                },
                {
                  href: "/my-account/compare",
                  title: "Compare",
                },
                {
                  href: "/my-account/order-tracking",
                  title: "Order Tracking",
                },
              ],
            },
            {
              title: "Product Single",
              child: [
                {
                  href: "/product/1",
                  title: "Product Single",
                },
                {
                  href: "/product/product-single-2",
                  title: "Product Single Two",
                },
              ],
            },
          ],
        },
        {
          title: "Blogs",
          child: [
            {
              href: "/blog",
              title: "Blog Grid View One",
            },
            {
              href: "/blog/blog-2",
              title: "Blog Grid View Two",
            },
            {
              href: "/blog/blog-3",
              title: "Blog List View",
            },
            {
              href: "/blog/blog-single",
              title: "Blog Single View One",
            },
            {
              href: "/blog/blog-single-2",
              title: "Blog Single View TWo",
            },
          ],
        },
        {
          title: "Pages",
          child: [
            {
              href: "/faq",
              title: "Frequently Questions",
            },
            {
              href: "/privacy-policy",
              title: "Privacy Policy",
            },
            {
              href: "/404",
              title: "404 Page",
            },
            {
              href: "/contact-us",
              title: "Contact Us One",
            },
            {
              href: "/contact-us/contact-us-2",
              title: "Contact Us Two",
            },
            {
              href: "/coming-soon",
              title: "Coming Soon",
            },
            {
              href: "/vendor-dashboard",
              title: "Vendor",
            },
            {
              href: "/my-account",
              title: "My Account",
            },
            {
              href: "/login",
              title: "Login",
            },
          ],
        },
        {
          href: "/about-us",
          title: "About Us",
        },
      ],
      products: [],
      category: [],
      cartproduct: {},
      searchString: "",
    };
  },

  mounted: function () {
    if (process.client) {
      this.$store.commit('cart/initializeCart', JSON.parse(localStorage.getItem('cart')) || [])
      this.$store.commit('products/initializeWishlist', JSON.parse(localStorage.getItem('wishlist')) || [])
    }
    // Menu Js
    this.$nextTick(() => {
      if (process.client) {
        const header = document.getElementById("header");
        const mobile_header = document.getElementById("mobile_header");

        if (header && mobile_header) {
          const sticky = header.offsetTop;

          window.onscroll = function () {
            if (window.pageYOffset > sticky) {
              header.classList.add("sticky");
              mobile_header.classList.add("sticky");
            } else {
              header.classList.remove("sticky");
              mobile_header.classList.remove("sticky");
            }
          };
        }

        this.$store.commit('cart/initializeCart',
            JSON.parse(localStorage.getItem('cart')) || []);
        this.$store.commit('products/initializeWishlist',
            JSON.parse(localStorage.getItem('wishlist')) || []);
      }

      var header = document.getElementById("header");
      var mobile_header = document.getElementById("mobile_header");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          mobile_header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
          mobile_header.classList.remove("sticky");
        }
      }
    });
  },

  computed: {
    isDarkMode() {
      return this.$store.state.darkMode
    },
    ...mapState({
      productslist: (state) => state.products.productslist,
      searchItems: (state) => state.products.searchProduct,
    }),
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
      wishlist: "products/wishlistItems",
    }),
  },

  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode')
    },
    getVariantImage(item) {
      if (item.imageId && item.images) {
        const variantImage = item.images.find(img => img.image_id === item.imageId);
        if (variantImage) {
          return this.getImageUrl(variantImage.src);
        }
      }
      return this.getImageUrl(item.images[0].src);
    },
    getImageUrl(path) {
      if (path.startsWith('http')) {
        return path;
      }
      return require("@/assets/img/product-image/" + path);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    removeCartItem: function (product) {
      this.$store.dispatch("cart/removeCartItem", product);
    },
    removeWishlistItem(product) {
      this.$store.dispatch('products/removeWishlistItem', {
        ...product,
        variantId: product.variantId || `${product.id}-${product.color}-${product.size}`
      });
    },
    searchProduct() {
      this.$store.dispatch("products/searchProduct", this.searchString);
    },
  },
};
</script>

<style>
.v-sidebar-menu .vsm--toggle-btn {
  display: none;
}
.v-sidebar-menu {
  position: relative;
  background-color: transparent;
}
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
  background-color: var(--main-theme-color);
}
.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active,
.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  -webkit-box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
  box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
}
.variant-info {
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #666;
}
.color-badge {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #ddd;
}
.offcanvas-wishlist .variant-info {
  margin: 3px 0;
  font-size: 11px;
}

.dark-mode-toggle {
  background: #f0f0f0;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: relative;
  width: 50px;
  height: 26px;
  transition: background 0.3s ease;
}

.dark-mode-toggle.dark {
  background-color: var(--sticky-header-bg-dark);
}

.dark-mode-toggle .sun,
.dark-mode-toggle .moon {
  font-size: 16px;
  position: absolute;
}

.dark-mode-toggle .sun {
  opacity: 1;
  transform: scale(1);
}

.dark-mode-toggle.dark .sun {
  opacity: 0;
  transform: scale(0);
}

.dark-mode-toggle .moon {
  opacity: 0;
  transform: scale(0);
}

.dark-mode-toggle.dark .moon {
  opacity: 1;
  transform: scale(1);
}

.dark-mode .main-menu ul li a {
  color: var(--text-color);
}

.dark-mode {
  background-color: var(--sticky-header-bg-dark);
  color: var(--text-color);
}

.header-bottom {
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
}
:root {
  --sticky-golden-bg: #f8f5f0;
  --sticky-golden-bg-dark: #3a3325; /* Darker golden tone */
}

.sticky-color--golden.sticky {
  background-color: var(--sticky-golden-bg) !important;
}

.dark-mode .sticky-color--golden.sticky {
  background-color: var(--sticky-header-bg-dark) !important;
}

.dark-mode .sticky-header {
  background-color: var(--sticky-header-bg-dark) !important;
}

#header {
  background-color: var(--sticky-header-bg);
}

#header.dark-mode {
  background-color: var(--sticky-header-bg-dark);
}

</style>