export default {
  state: {
    shoppingCart: [],
  },
  actions: {
    addProduct({ commit, state }, product) {
      console.log('state', state.shoppingCart);
      let getProduct = state.shoppingCart.filter((e) => {
        return e.id === product.id;
      });
      if (getProduct.length === 0) {
        const newProduct = {
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        let newShoppingCart = state.shoppingCart;
        newShoppingCart.push(newProduct);
        commit('SET_ADD_PRODUCTS', newShoppingCart);
        return true;
      }
    },
  },
  mutations: {
    SET_ADD_PRODUCTS(state, products) {
      state.shoppingCart = products;
    },
  },
  getters: {
    shoppingCart: (state) => {
      return state.shoppingCart;
    },
  },
};
