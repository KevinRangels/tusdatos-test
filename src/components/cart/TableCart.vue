<template>
  <table class="table table-hover mb-0">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <ItemTableCart v-for="item in shoppingCart" :key="item.id" :data="item" />
      <p class="text-center py-4" v-if="shoppingCart.length === 0">Sin productos en el carrito</p>
    </tbody>
  </table>
</template>

<script>
import ItemTableCart from '@/components/cart/ItemTableCart.vue';

export default {
  name: 'TableCart',
  components: {
    ItemTableCart,
  },
  computed: {
    shoppingCart() {
      return this.$store.getters.shoppingCart;
    },
  },
};
</script>

<style>
</style>