<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container ">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Add Product Area -->
    <section id="add_product_area" class="pt-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <!-- Nav tabs -->
            <div class="dashboard_tab_button">
              <b-navbar-nav>
                <b-nav-item to="/my-account"><i class="fas fa-tachometer-alt"></i>Dashboard</b-nav-item>
                <b-nav-item to="/my-account/product"><i class="fas fa-map-marker-alt"></i>Products</b-nav-item>
                <b-nav-item to="/my-account/add-product"><i class="fas fa-cart-arrow-down"></i>Add Product</b-nav-item>
                <b-nav-item to="/my-account/chat"><i class="fas fa-cart-arrow-down"></i>Chat</b-nav-item>
                <b-nav-item to="/my-account/downloads"><i class="fas fa-cloud-download-alt"></i>Downloads</b-nav-item>
                <b-nav-item to="/my-account/account-details"><i class="fas fa-user"></i>Account details</b-nav-item>
                <b-nav-item @click.prevent="$store.dispatch('auth/logout')">
                  <i class="fas fa-sign-out-alt"></i>Logout
                </b-nav-item>
              </b-navbar-nav>
            </div>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div class="add_product_wrapper">
              <form class="add_product_form" @submit.prevent="submitProduct">
                <h3>Add Product</h3>
                <div class="row">
                  <!-- Product Images -->
                  <div class="col-lg-12">
                    <div class="image-input">
                      <img :src="imageUrl || require('@/assets/img/product-image/1.png')" class="image-preview" alt="Product Image">
                      <input type="file" accept="image/*" id="imageInput" @change="uploadImage">
                      <label for="imageInput" class="image-button">
                        <i class="far fa-image"></i>Choose image</label>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="fotm-group">
                      <label for="product_image_url">Product Image URL</label>
                      <input id="product_image_url" v-model="imageUrlInput" class="form-control"
                             placeholder="https://example.com/image.jpg" type="text" @input="handleImageUrl">
                    </div>
                  </div>

                  <!-- Basic Info -->
                  <div class="col-lg-6">
                    <div class="fotm-group">
                      <label for="product_name">Product Name*</label>
                      <input id="product_name" v-model="product.title" class="form-control"
                             placeholder="Product Name" type="text" required>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fotm-group">
                      <label for="product_price">Product Price*</label>
                      <input id="product_price" v-model.number="product.price" class="form-control"
                             placeholder="0" type="number" min="0" step="0.01" required>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="fotm-group">
                      <label for="product_description">Description*</label>
                      <textarea id="product_description" v-model="product.description"
                                class="form-control" rows="3" required></textarea>
                    </div>
                  </div>

                  <!-- Categories & Tags -->
                  <div class="col-lg-6">
                    <div class="fotm-group">
                      <label for="product_category">Category</label>
                      <input id="product_category" v-model="product.category" class="form-control"
                             placeholder="Category" type="text">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fotm-group">
                      <label for="product_brand">Brand</label>
                      <input id="product_brand" v-model="product.brand" class="form-control"
                             placeholder="Brand" type="text">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="fotm-group">
                      <label for="product_tags">Tags (comma separated)</label>
                      <input id="product_tags" v-model="tagsInput" class="form-control"
                             placeholder="tag1, tag2, tag3" type="text">
                    </div>
                  </div>

                  <!-- Stock & Status -->
                  <div class="col-lg-4">
                    <div class="fotm-group">
                      <label for="available_stock">Stock Quantity</label>
                      <input id="available_stock" v-model.number="product.stock" class="form-control"
                             placeholder="0" type="number" min="0">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="fotm-group">
                      <label for="product_discount">Discount (%)</label>
                      <input id="product_discount" v-model.number="product.discount" class="form-control"
                             placeholder="0" type="number" min="0" max="100">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="fotm-group">
                      <label for="product_rating">Rating (0-5)</label>
                      <input id="product_rating" v-model.number="product.rating" class="form-control"
                             placeholder="0" type="number" min="0" max="5" step="0.1">
                    </div>
                  </div>

                  <!-- Flags -->
                  <div class="col-lg-6">
                    <div class="fotm-group">
                      <label for="is_hot">Hot Product</label>
                      <select id="is_hot" v-model="product.hot" class="form-control">
                        <option :value="true">Yes</option>
                        <option :value="false">No</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fotm-group">
                      <label for="is_new">New Product</label>
                      <select id="is_new" v-model="product.new" class="form-control">
                        <option :value="true">Yes</option>
                        <option :value="false">No</option>
                      </select>
                    </div>
                  </div>

                  <!-- Variants (simplified) -->
                  <div class="col-lg-12">
                    <div class="variant-section">
                      <h4>Product Variants</h4>
                      <div v-for="(variant, index) in product.variants" :key="index" class="variant-item">
                        <div class="row">
                          <div class="col-lg-3">
                            <input v-model="variant.sku" placeholder="SKU" class="form-control">
                          </div>
                          <div class="col-lg-3">
                            <input v-model="variant.size" placeholder="Size" class="form-control">
                          </div>
                          <div class="col-lg-3">
                            <input v-model="variant.color" placeholder="Color" class="form-control">
                          </div>
                          <div class="col-lg-3">
                            <button type="button" @click="removeVariant(index)" class="btn btn-danger">Remove</button>
                          </div>
                        </div>
                        <div class="row mt-2">
                          <div class="col-lg-12">
                            <div class="image-input">
                              <img :src="variant.image || require('@/assets/img/product-image/1.png')" class="image-preview" alt="Variant Image">
                              <input type="file" accept="image/*" :id="'variantImage' + index" @change="uploadVariantImage($event, index)">
                              <label :for="'variantImage' + index" class="image-button">
                                <i class="far fa-image"></i>Choose Variant Image
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" @click="addVariant" class="btn btn-secondary mt-2">Add Variant</button>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="btn_right_table">
                      <button type="submit" class="theme-btn-one bg-black btn_sm">Add Product</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Area -->
    <InstagramArea class="pt-100"/>
  </div>
</template>

<script>
import InstagramArea from '~/components/instagram/InstagramArea';
export default {
  name: 'AddProduct',
  components: {
    InstagramArea
  },
  data() {
    return {
      title: 'Add Product',
      breadcrumbItems: [
        { text: 'Home', to: '/' },
        { text: 'Add Product' }
      ],
      imageUrl: '',
      product: {
        title: '',
        images: [],
        variants: [{
          sku: 'SKU-0',
          size: 'XS',
          color: 'Purple',
          image: null
        }]
      },
      imageUrlInput: '',
      tagsInput: ''
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    async uploadVariantImage(event, index) {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'smtkyk-preset');

      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dfbubiipy/image/upload', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        this.product.variants[index].image = data.secure_url;
        console.log('Variant Image URL:', data.secure_url);
      } catch (error) {
        console.error('Variant image upload failed:', error);
      }
    },

    async uploadImage(event) {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'smtkyk-preset');

      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dfbubiipy/image/upload', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        this.imageUrl = data.secure_url;
        console.log('Uploaded Image URL:', this.imageUrl);

        this.product.images = [{
          imageId: 0,
          id: 0,
          alt: this.product.title || 'Product image',
          src: this.imageUrl,
          variantIds: []
        }];
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    },

    handleImageUrl() {
      if (this.imageUrlInput.trim() !== '') {
        this.product.images = [{
          imageId: 0,
          id: 0,
          alt: this.product.title || 'Product image',
          src: this.imageUrlInput.trim(),
          variantIds: []
        }];
      }
    },
    addVariant() {
      this.product.variants.push({
        sku: `SKU-${this.product.variants.length}`,
        size: 'XXL',
        color: 'Black',
        image: null
      });
    },

    removeVariant(index) {
      this.product.variants.splice(index, 1);
    },

    async submitProduct() {
      try {
        this.product.tags = this.tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

        const payload = {
          ...this.product,
          variants: this.product.variants.map(variant => ({
            sku: variant.sku,
            size: variant.size,
            color: variant.color,
            image: variant.image || null
          })),
          images: this.product.images.map(image => ({
            src: image.src,
            alt: image.alt || this.product.title
          }))
        };

        const createdProduct = await this.$store.dispatch('products/createProduct', payload);

        if (!createdProduct) {
          throw new Error('Product creation failed - no product returned');
        }

        await this.$store.dispatch('products/fetchProducts');
        this.$bvToast.toast('Product created successfully!', {
          title: 'Success',
          variant: 'success',
          solid: true
        });

        this.$router.push('/');
      } catch (error) {
        console.error('Error creating product:', error);
        
        let errorMessage = 'Failed to create product. Please try again.';
        if (error.response) {
          errorMessage = error.response.data?.message || errorMessage;
        } else if (error.message) {
          errorMessage = error.message;
        }

        this.$bvToast.toast(errorMessage, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      }
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Add Product Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template'
        }
      ]
    };
  }
};
</script>
