const reducer = (state, action) => {
  if (action.type === 'clear_cart') {
    return { ...state, cart: [] };
  }
  return state;
};
export default reducer;
