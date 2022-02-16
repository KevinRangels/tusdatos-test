<template>
  <div class="col-lg-4 sidebar bg-secondary pt-5 ps-lg-4 pb-md-2">
    <div class="ps-lg-4 mb-3 pb-5">
      <h2 class="h4 pb-3">Tu carrito</h2>
      <div class="d-flex justify-content-between mb-3"><span class="h6 mb-0">Subtotal:</span><span class="text-nav">$776.99</span></div>
      <div class="d-flex justify-content-between mb-3"><span class="h6 mb-0">Tax:</span><span class="text-nav">&mdash;</span></div>
      <div class="d-flex justify-content-between mb-3"><span class="h6 mb-0">Shipping:</span><span class="text-nav">$12.35</span></div>
      <div class="d-flex justify-content-between mb-3"><span class="h6 mb-0">Total:</span><span class="h6 mb-0">$789.34</span></div>
      <button class="btn btn-primary d-block w-100" type="submit">Pagar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  computed: {
    shoppingCart() {
      return this.$store.getters.shoppingCart;
    },
  },
};
</script>

<style>
</style>