export const initialState = {
  carts: [],
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD TO CART":
      return { ...state, carts: [...state.carts, action.item] };
    case "REMOVE FROM THE CART":
      let newCarts = [...state.carts];
      const index = state.carts.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newCarts.splice(index, 1);
      } else {
        console.warn("cant remove");
      }
      return { ...state, carts: newCarts };

    default:
      return state;
  }
};
export default CartReducer;
