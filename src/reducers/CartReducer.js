export const initialState = {
  carts: [],
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD TO CART":
      return { ...state, carts: [...state.carts, action.item] };
    default:
      return state;
  }
};
export default CartReducer;
