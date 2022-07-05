const reducer = (state, action) => {
  if (action.type === 'clear_cart') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.filter((cartItem) => cartItem, id !== action.payload),
    };
  }
  return state;
};
export default reducer;
