<template>
  <div class="col-lg-3">
    <div class="shop_sidebar_wrapper">
      <div class="shop_Search">
        <form @submit.prevent="searchProducts">
          <input
            v-model="searchQuery"
            class="form-control"
            placeholder="Search product..."
            type="text"
            @input="searchProducts"
          >
          <button type="submit">
            <img :src="require('@/assets/img/svg/search.svg')" alt="img">
          </button>
        </form>
      </div>

      <div class="shop_sidebar_boxed">
        <h4>Sort By Price</h4>
        <select v-model="sortOrder" @change="sortProducts" class="form-control">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>


    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { debounce } from 'lodash';

export default {
  name: 'ShopSidebar',

  data() {
    return {
      value: [50, 1000],
      searchQuery: '',
      sortOrder: 'asc' // Varsayılan olarak düşükten yükseğe
    };
  },

  computed: {
    ...mapState({
      shuffleproducts: state => state.products.shuffleproducts,
    }),
  },

  methods: {
    searchProducts: debounce(function () {
      if (!this.searchQuery.trim()) {
        this.$store.dispatch('products/fetchProducts');
        return;
      }

      const query = this.searchQuery.toLowerCase();
      const filtered = this.shuffleproducts.filter(product =>
        product.title.toLowerCase().startsWith(query)
      );
      this.$store.dispatch('products/shuffleProduct', filtered);
    }, 300),

    sortProducts() {
      const sorted = [...this.shuffleproducts].sort((a, b) => {
        return this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
      this.$store.dispatch('products/shuffleProduct', sorted);
    },

    getallProduct() {
      this.$store.dispatch('products/fetchProducts');
    }
  }
};
</script>
