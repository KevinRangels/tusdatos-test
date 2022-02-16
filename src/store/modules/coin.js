export default {
  state: {
    coin: {
      symbol: '$',
      name: 'Dolar',
      code: 'US',
    },
  },
  actions: {
    changeCoin({ commit }, coin) {
      commit('SET_CHANGE_COIN', coin);
    },
  },
  mutations: {
    SET_CHANGE_COIN(state, coin) {
      state.coin = coin;
    },
  },
  getters: {
    coinSelected: (state) => {
      return state.coin;
    },
  },
};
