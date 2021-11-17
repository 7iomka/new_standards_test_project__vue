import Vue from 'vue';
// mutations
export default {
  updateProduct(state, payload) {
    const productIndex = state.products.findIndex((product) => product.id === payload.id);
    if (productIndex !== -1) {
      Vue.set(state.products, productIndex, {
        ...state.products[productIndex],
        ...payload.data,
      });
    }
  },
}; // mutations
