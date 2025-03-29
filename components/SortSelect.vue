<template>
  <div class="product_shot">
    <div class="product_shot_title">
      <p>Sort By:</p>
    </div>
    <div class="customs_selects">
      <select class="customs_sel_box" v-model="selectedSort" @change="handleSortChange">
        <option value="low">Price: low to high</option>
        <option value="high">Price: high to low</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortSelect',
  props: {
    // Current selected sort option from parent
    value: {
      type: String,
      default: 'low'
    }
  },
  data() {
    return {
      selectedSort: this.value // Initialize with the prop value
    };
  },
  methods: {
    handleSortChange() {
      // Emit the updated sort option to the parent component
      this.$emit('update:selectedSort', this.selectedSort);
    }
  },
  watch: {
    // Watch for prop changes and update internal state
    value(newValue) {
      this.selectedSort = newValue;
    }
  }
};
</script>

<style scoped>
/* Custom styles for the sort select */
</style>
