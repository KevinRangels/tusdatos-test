<template>
  <tr>
    <td class="py-3 align-middle">
      <div class="d-flex align-items-center">
        <img class="me-2 d-none d-md-block" :src="data.image" alt="Visa" width="39" />
        <div>
          <span class="fw-medium text-heading me-1">{{ data.name | titleCut }}</span>
        </div>
      </div>
    </td>
    <td class="py-3 align-middle">$ {{ data.price }}</td>
    <td class="py-3 align-middle text-center">
      <input class="form-control text-center w-50 d-inline" type="number" min="1" id="" :value="data.quantity" @change="handleChangeValue($event)" />
    </td>
    <td class="py-3 align-middle">$ {{ totalItem }}</td>
    <td class="py-3 align-middle">
      <a class="nav-link-style text-danger" @click="handleDeleteItem(data.id)" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove">
        <div class="fas fa-trash"></div>
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ItemTableCart',
  props: {
    data: null,
  },
  computed: {
    totalItem() {
      let value = parseFloat(this.data.price * this.data.quantity);
      return value.toFixed(2);
    },
  },
  methods: {
    handleChangeValue(e) {
      let product = {
        id: this.data.id,
        quantity: e.target.value,
      };
      this.$store.dispatch('changeQuantityProduct', product);
    },
    handleDeleteItem(id) {
      this.$store.dispatch('deleteProduct', id).then((e) => {
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'Eliminado',
          text: 'Producto eliminado del carrito',
        });
      });
    },
  },
  filters: {
    titleCut(text) {
      if (text && text.length > 20) {
        return text.substr(0, 30) + '...';
      }
      return text;
    },
  },
};
</script>

<style lang="sass" scoped>
.fa-trash
  cursor: pointer
</style>