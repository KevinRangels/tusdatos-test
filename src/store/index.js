import Vue from 'vue';
import Vuex from 'vuex';

import Products from './modules/products';
import Cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: Products,
    cart: Cart,
  },
});
