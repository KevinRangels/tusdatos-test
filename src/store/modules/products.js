import { HTTP } from '../../axios';

export default {
  state: {
    products: [],
    product: null,
  },
  actions: {
    async getProducts({ commit }) {
      try {
        let res = await HTTP.get('/products');
        commit('SET_GET_PRODUCTS', res.data);
      } catch (error) {}
    },
  },
  mutations: {
    SET_GET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  getters: {
    allProducts: (state) => {
      return state.products;
    },
  },
};
