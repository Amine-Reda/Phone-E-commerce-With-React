export const initialState = {
  cart: [],
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD TO CART":
      return { ...state, cart: [...state.cart, action.item] };
    default:
      return state;
  }
};
export default CartReducer;
