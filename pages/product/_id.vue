<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Shop</h2>
              <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Single Area -->
    <section id="product_single_one" class="ptb-100">
      <div class="container">
        <div class="row area_boxed">
          <div class="col-lg-4">
            <div class="product_single_one_img">
              <div ref="mySwiper" v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div v-for="(product, index) in getDetail.images" :key="index" class="swiper-slide">
                    <inner-image-zoom :id="product.image_id" :src="getImageUrl(product.src)"
                                      :zoomSrc="getImageUrl(product.src)" className="product-image-zoom"
                                      moveType="drag"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="product_details_right_one">
              <div class="modal_product_content_one">
                <h3 class="text-capitalize">{{ getDetail.title }}</h3>
                <div v-if="getDetail.rating == 5" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>

                </div>
                <div v-else-if="getDetail.rating == 4" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else-if="getDetail.rating == 3" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else-if="getDetail.rating == 2" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else-if="getDetail.rating == 1" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>

                </div>
                <div v-else class="product-review">
                  <h5>No Rating</h5>
                </div>

                <h4 v-if="getDetail.discount">
                  ${{ discountedPrice(getDetail) }}
                  <del>${{ getDetail.price }}</del>
                </h4>
                <h4 v-else>${{ getDetail.price }}</h4>
                <p>{{ getDetail.description }}</p>

                <div class="variable-single-item">
                  <h5>Size</h5>
                  <ul class="size-variant d-flex">
                    <li v-for="sizeOption in size" :key="sizeOption">
                      <button :class="{ active: selectedSize === sizeOption }" @click="changeSizeVariant(sizeOption)">
                        {{ sizeOption }}
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="variable-single-item">
                  <h5>Color</h5>
                  <ul class="color-variant d-flex">
                    <li v-for="(variant, index) in Color(getDetail.variants)" :key="index"
                        :class="{ active: activeColor === variant }">
                      <a :style="{ 'background-color': variant }"
                         @click="sizeVariant(getDetail.variants[index].image_id, index, variant)"></a>
                    </li>
                  </ul>
                </div>
                <form id="product_count_form_two">
                  <div class="product_count_one">
                    <b-form-spinbutton id="sb-inline" v-model="quantity" class="border-0" inline max="100"
                                       min="1"></b-form-spinbutton>
                  </div>
                </form>
                <div class="links_Product_areas">
                  <ul>
                    <li>
                      <button class="action wishlist bg-transparent" title="Wishlist" @click="addToWishlist(getDetail)">
                        <i class="far fa-heart mr-1"></i>Add To Wishlist
                      </button>
                    </li>

                  </ul>
                  <button class="theme-btn-one btn-black-overlay btn_sm" @click="addToCart(getDetail)">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_details_tabs">
              <b-tabs>
                <b-tab id="description" active title="Description">
                  <div class="product_description">
                    <p>{{ getDetail.description }}</p>
                  </div>
                </b-tab>
              </b-tabs>

            </div>
          </div>
        </div>
      </div>
    </section>

    <RelatedProducts :productId="productId" :productType="productType"/>

    <!-- Instagram Arae -->
    <InstagramArea/>
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import InstagramArea from "~/components/instagram/InstagramArea";
import RelatedProducts from "~/components/widgets/RelatedProducts";

export default {
  name: "product-single",
  components: {
    ProductBox1,
    InstagramArea,
    RelatedProducts,
  },
  async asyncData({params, store}) {
    try {
      await store.dispatch('products/fetchProducts');
      return {
        productId: params.id
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      return {
        productId: params.id
      }
    }
  },
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      activeColor: "",
      selectedSize: "",
      qty: "",
      size: [],
      productType: "",
      productId: "",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Product Single",
          to: "/product",
        },
      ],
      quantity: 1,
      cartProduct: {},
      compareProduct: {},
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },
    };
  },

  computed: {
    getDetail() {
      const product = this.$store.getters['products/getProductById'](this.productId);
      return product || {
        id: 0,
        title: 'Ürün Yükleniyor...',
        price: 0,
        discount: 0,
        description: '',
        rating: 0,
        variants: [
          {color: '#cccccc', size: 'XXL', image_id: 1},
          {color: '#00ff00', size: 'M', image_id: 2},
          {color: '#0000ff', size: 'L', image_id: 3}
        ],
        images: [
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
            image_id: 1
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
            image_id: 2
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
            image_id: 3
          }
        ],
        collection: '',
        category: '',
        brand: '',
        stock: 0,
        new: false,
        hot: false,
        tags: []
      };
    },
    swiper() {
      return this.$refs.mySwiper?.swiper;
    },
  },

  mounted() {
    if (this.getDetail && this.getDetail.variants && this.getDetail.variants.length > 0) {
      const defaultVariant = this.getDetail.variants[0];
      this.activeColor = defaultVariant.color;
      this.selectedSize = defaultVariant.size;
      this.size = this.getDetail.variants
          .filter(v => v.color === this.activeColor)
          .map(v => v.size);

      this.$nextTick(() => {
        if (this.swiper) {
          this.sizeVariant(defaultVariant.image_id, 0, defaultVariant.color);
        }
      });

      this.changeSizeVariant(defaultVariant.size);
      this.relatedProducts();
    }
    window.scrollTo(0, 0);
  },

  methods: {
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
    addToCart() {
      if (!this.selectedSize) {
        alert('Please select size!');
        return;
      }
      const selectedVariant = this.getDetail.variants.find(
          v => v.color === this.activeColor && v.size === this.selectedSize
      );
      if (!selectedVariant) {
        alert('Invalid variant!');
        return;
      }
      this.$store.dispatch('cart/addToCart', {
        ...this.getDetail,
        quantity: this.quantity,
        color: this.activeColor,
        size: this.selectedSize,
        imageId: selectedVariant.image_id,
        variantId: `${this.getDetail.id}-${this.activeColor}-${this.selectedSize}`
      });
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
    },
    addToWishlist() {
      if (!this.selectedSize) {
        alert('Please select size!');
        return;
      }
      const selectedVariant = this.getDetail.variants.find(
          v => v.color === this.activeColor && v.size === this.selectedSize
      );
      if (!selectedVariant) {
        alert('Invalid variant!');
        return;
      }
      const wishlistItem = {
        ...this.getDetail,
        quantity: this.quantity,
        color: this.activeColor,
        size: this.selectedSize,
        imageId: selectedVariant.image_id,
        variantId: `${this.getDetail.id}-${this.activeColor}-${this.selectedSize}`,
        images: this.getDetail.images.filter(img => img.image_id === selectedVariant.image_id)
      };
      this.$store.dispatch('products/addToWishlist', wishlistItem);
    },
    relatedProducts() {
      this.productType = this.getDetail.type;
      this.productId = this.getDetail.id;
    },
    Color(variants) {
      if (!variants || !Array.isArray(variants)) {
        return [];
      }
      const uniqColor = [];
      for (let i = 0; i < variants.length; i++) {
        if (variants[i]?.color && uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false);
      this.activeColor = color;

      this.size = this.getDetail.variants
          .filter(v => v.color === color)
          .map(v => v.size);

      if (!this.size.includes(this.selectedSize)) {
        this.selectedSize = this.size[0] || '';
      }
    },
    changeSizeVariant(size) {
      this.selectedSize = size;

      console.log('Seçilen Beden:', this.selectedSize,
          'Aktif Renk:', this.activeColor,
          'Varyantlar:', this.getDetail.variants);
    },
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Shop page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Base Styles */
:root {
  /* Light Mode Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #495057;
  --border-color: #dee2e6;
  --primary-color: #007bff;
  --active-color: #0056b3;
  --rating-color: #ffc107;
}

.dark-mode {
  /* Dark Mode Colors */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #f8f9fa;
  --text-secondary: #adb5bd;
  --border-color: #495057;
  --primary-color: #4a90e2;
  --active-color: #1e70bf;
  --rating-color: #ffc107;
}

/* Apply color variables */
#product_single_one {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.product_details_right_one {
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.modal_product_content_one h3,
.modal_product_content_one h4 {
  color: var(--text-primary);
}

.modal_product_content_one p {
  color: var(--text-secondary);
}

.size-variant {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.size-variant li {
  margin-right: 10px;
  margin-bottom: 10px;
}

.size-variant button {
  padding: 5px 15px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
}

.size-variant button.active {
  border-color: #000;
  background: #000;
  color: #fff;
}

/* Color Variant Buttons */
.color-variant li {
  border: 2px solid var(--border-color);
}

.color-variant li.active {
  border-color: var(--primary-color);
}

/* Rating Stars */
.reviews_rating i {
  color: var(--text-secondary);
}

.reviews_rating i.active {
  color: var(--rating-color);
}

/* Price */
.modal_product_content_one h4 {
  color: var(--primary-color);
}

.modal_product_content_one h4 del {
  color: var(--text-secondary);
  opacity: 0.7;
}

/* Buttons */


.action.wishlist {
  color: var(--text-primary);
}

.action.wishlist:hover {
  color: var(--primary-color);
}
</style>