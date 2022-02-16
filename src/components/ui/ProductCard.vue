<template>
  <div class="col-md-4 col-sm-6 mb-grid-gutter">
    <div class="card card-product card-hover">
      <a class="card-img-top" href="#">
        <img :src="data.image" alt="Product thumbnail" />
      </a>
      <div class="card-body">
        <a class="meta-link fs-xs mb-1" href="#">{{ data.category }}</a>
        <h3 class="fs-md fw-medium mb-2">
          <a class="meta-link" href="#">{{ data.title | titleCut }}</a>
        </h3>
        <span class="text-heading fw-semibold">${{ data.price }}</span>
      </div>
      <div class="card-footer">
        <div class="star-rating mt-n1">
          <star-rating
            :read-only="true"
            :show-rating="false"
            :max-rating="5.0"
            :increment="0.5"
            :star-size="16"
            v-model="data.rating.rate"
            :rounded-corners="true"
            :border-width="2"
            :active-color="activeStar"
            :padding="3"
            :border-color="borderStart"
            :active-border-color="starBorder"
            :inactive-color="starInactive"
          />
        </div>
        <div class="d-flex align-items-center">
          <a class="btn-wishlist" @click="addProductFavorite()"
            ><i class="fas fa-heart" v-bind:class="[favorive && 'favorie__active']"></i><span class="btn-tooltip">Favoritos</span></a
          ><span class="btn-divider"></span>
          <a class="btn-addtocart" @click="addProductToCart(data)">
            <i class="fas fa-shopping-cart"></i>
            <span class="btn-tooltip">Al Carrito</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'ProductCard',
  props: {
    data: {},
  },
  components: {
    StarRating,
  },
  data() {
    return {
      favorive: false,
    };
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProduct', product).then((e) => {
        if (e) {
          this.$notify({
            group: 'app',
            type: 'success',
            title: 'Agregado',
            text: 'Producto agregado al carrito',
          });
        } else {
          this.$notify({
            group: 'app',
            type: 'warn',
            title: 'Ya lo tienes',
            text: 'Tienes este producto en tu carrito',
          });
        }
      });
    },
    addProductFavorite() {
      this.favorive = !this.favorive;
      if (this.favorive) {
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'Agregado',
          text: 'Producto agregado a favoritos',
        });
      } else {
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'Eliminado',
          text: 'Producto eliminado de favoritos',
        });
      }
    },
  },
  computed: {
    borderStart() {
      return '#d8d8d8';
    },
    activeStar() {
      return '#FFAF19';
    },
    starBorder() {
      return '#d8d8d8';
    },
    starInactive() {
      return '#D4D4D4';
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
.card-img-top img
  max-height: 250px
  min-height: 250px
  padding: 30px
.fa-shopping-cart
  cursor: pointer
.favorie__active
  color: red
.fa-heart
  cursor: pointer
</style>