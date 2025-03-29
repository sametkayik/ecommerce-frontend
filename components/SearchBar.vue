<template>
  <div class="shop_Search">
    <form @submit.prevent="searchProducts">
      <input
          v-model="searchQuery"
          class="form-control"
          placeholder="Search product..."
          type="text"
          @input="searchProducts"
      />
      <button type="submit">
        <img :src="require('@/assets/img/svg/search.svg')" alt="img" />
      </button>
    </form>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { mapState } from 'vuex';

export default {
  name: 'SearchBar',

  data() {
    return {
      searchQuery: '',
    };
  },

  computed: {
    ...mapState({
      shuffleproducts: (state) => state.products.shuffleproducts,
    }),
  },

  methods: {
    searchProducts: debounce(function () {
      if (!this.searchQuery.trim()) {
        this.$store.dispatch('products/fetchProducts');
        return;
      }

      const query = this.searchQuery.toLowerCase();
      const filtered = this.shuffleproducts.filter((product) =>
          product.title.toLowerCase().startsWith(query)
      );
      this.$store.dispatch('products/shuffleProduct', filtered);
    }, 300),
  },
};
</script>

<style scoped>
/* Özel stil eklemek isterseniz burada yapabilirsiniz */
</style>
