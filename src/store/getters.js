// getters
export default {
  totalCost(state) {
    return state.products.reduce((acc, product) => acc + product.num * product.price, 0);
  },
}; // getters
