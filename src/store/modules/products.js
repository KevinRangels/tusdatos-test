import { HTTP } from '../../axios';

export default {
  state: {
    products: [],
    product: null,
    loading: false,
  },
  actions: {
    async getProducts({ commit }) {
      try {
        commit('SET_LOADING_PRODUCTS', true);
        let res = await HTTP.get('/products');
        commit('SET_GET_PRODUCTS', res.data);
        commit('SET_LOADING_PRODUCTS', false);
      } catch (error) {}
    },
  },
  mutations: {
    SET_GET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADING_PRODUCTS(state, status) {
      state.loading = status;
    },
  },
  getters: {
    allProducts: (state) => {
      return state.products;
    },
    loadingProducts: (state) => {
      return state.loading;
    },
  },
};
