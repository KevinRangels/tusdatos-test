export default {
  state: {
    modalStatusPay: false,
  },
  actions: {
    showModalStatusPay({ commit }, show) {
      commit('SET_MODAL_STATUS_PAY', show);
    },
  },
  mutations: {
    SET_MODAL_STATUS_PAY(state, show) {
      state.modalStatusPay = show;
    },
  },
  getters: {
    modalStatusPay: (state) => {
      return state.modalStatusPay;
    },
  },
};
