<template>
  <div class="col-md-4 col-sm-6 mb-grid-gutter">
    <div class="card card-product card-hover">
      <a class="card-img-top" href="shop-single.html">
        <img :src="data.image" alt="Product thumbnail" />
      </a>
      <div class="card-body">
        <a class="meta-link fs-xs mb-1" href="#">{{ data.category }}</a>
        <h3 class="fs-md fw-medium mb-2">
          <a class="meta-link" href="shop-single.html">{{ data.title | titleCut }}</a>
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
            :border-color="starBorder"
            :active-border-color="activeStar"
            :inactive-color="starInactive"
          />
        </div>
        <div class="d-flex align-items-center">
          <a class="btn-wishlist" href="#"><i class="far fa-heart"></i><span class="btn-tooltip">Wishlist</span></a
          ><span class="btn-divider"></span><a class="btn-addtocart" href="#"><i class="fas fa-shopping-cart"></i><span class="btn-tooltip">To Cart</span></a>
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
    data: {
      borderStart: '#d8d8d8',
      activeStar: '#FFAF19',
      starBorder: '#d8d8d8',
      starInactive: '#D4D4D4',
    },
  },
  components: {
    StarRating,
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
</style>