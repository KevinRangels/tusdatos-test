export default {
  state: {
    shoppingCart: [],
  },
  actions: {
    addProduct({ commit, state }, product) {
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
    changeQuantityProduct({ commit, state }, product) {
      let updatedCart = state.shoppingCart;
      updatedCart.forEach((element) => {
        if (element.id === product.id) {
          element.quantity = product.quantity;
        }
      });
    },
    deleteProduct({ commit, state }, id) {
      let updatedCart = state.shoppingCart;
      let newCart = updatedCart.filter((e) => e.id !== id);
      commit('SET_ADD_PRODUCTS', newCart);
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
