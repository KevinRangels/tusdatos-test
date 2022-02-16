import Vue from 'vue';
import Vuex from 'vuex';

import UI from './modules/ui';
import Products from './modules/products';
import Cart from './modules/cart';
import Coin from './modules/coin';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: Products,
    cart: Cart,
    ui: UI,
    coin: Coin,
  },
});
