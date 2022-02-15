<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 content py-4 mb-2 mb-sm-0 pb-sm-5">
          <div class="d-flex justify-content-between align-items-center py-3 mb-3">
            <div class="d-flex justify-content-center align-items-center">
              <select class="form-select me-2" style="width: 15.25rem">
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="newness">Sort by newness</option>
                <option value="price: low to high">Sort by price: low to high</option>
                <option value="price: high to low">Sort by price: high to low</option>
              </select>
              <div class="d-none d-sm-block fs-sm text-nowrap ps-1 mb-1">of 135 products</div>
            </div>
          </div>
          <div class="row">
            <ProductCard v-for="item in products" :key="item.id" :data="item" />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Sidebar from '@/components/ui/Sidebar.vue';
import ProductCard from '@/components/ui/ProductCard.vue';
import Pagination from '@/components/ui/Pagination.vue';

export default {
  name: 'Shop',
  components: {
    Sidebar,
    Fragment,
    ProductCard,
    Pagination,
  },
  mounted() {
    this.handleGetProducts();
  },
  methods: {
    handleGetProducts() {
      this.$store.dispatch('getProducts');
    },
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
};
</script>
<style lang="sass" scoped>
</style>