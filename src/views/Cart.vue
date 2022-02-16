<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 content py-4">
        <h1 class="mb-3 pb-4 text-start">Carrito de compras</h1>
        <div class="table-responsive fs-md">
          <TableCart />
        </div>
      </div>
      <Summary />
    </div>
  </div>
</template>

<script>
import TableCart from '@/components/cart/TableCart.vue';
import Summary from '@/components/cart/Summary.vue';
export default {
  name: 'Cart',
  components: {
    TableCart,
    Summary,
  },
};
</script>
<style lang="sass" scoped>
</style>