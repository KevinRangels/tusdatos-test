<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 py-4 mb-2 mb-sm-0 pb-sm-5">
          <div class="row mb-3">
            <div class="col-md-4 d-flex align-items-center">
              <div class="">
                <label class="form-label d-flex" for="cc-expiry">Buscar</label>
                <input class="form-control me-2" type="text" v-model="filter" />
              </div>
              <div class="d-none d-sm-block fs-sm text-nowrap ps-1 mb-0 mx-2">{{ filteredProducts.length }} productos</div>
            </div>
          </div>
          <div class="row" v-if="filteredProducts.length === 0">
            <div class="col-md-4 col-sm-6 mb-grid-gutter" v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
              <PuSkeleton height="200px" />
            </div>
          </div>
          <div class="row" v-else>
            <ProductCard v-for="item in filteredProducts" :key="item.id" :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Sidebar from '@/components/ui/Sidebar.vue';
import ProductCard from '@/components/ui/ProductCard.vue';

export default {
  name: 'Shop',
  components: {
    Sidebar,
    Fragment,
    ProductCard,
  },
  data() {
    return {
      filter: '',
    };
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
    filteredProducts() {
      if (!this.filter) {
        return this.products;
      }
      return this.products.filter((a) => a.title.toLowerCase().includes(this.filter.toLowerCase()) || a.description.toLowerCase().includes(this.filter.toLowerCase()));
    },
  },
};
</script>
<style lang="sass" scoped>
</style>