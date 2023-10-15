import { createSlice } from "@reduxjs/toolkit";
const perseCart: any = localStorage.getItem("AppointmentCart");
const getCart = JSON.parse(perseCart);
const cartInitialState = {
  cart: getCart || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload) {
        state.cart.push(action.payload);
        const saveToLocalStorage = JSON.stringify(state.cart);
        localStorage.setItem("AppointmentCart", saveToLocalStorage);
      }
    },

    getToCart: (state) => {
      const perseCart: any = localStorage.getItem("AppointmentCart");
      const getCart = JSON.parse(perseCart);
      state.cart = getCart || [];
    },
    deleteToCart: (state, action) => {
      const id = action.payload;

      const deletedCart = state.cart.filter((c: any) => c.id !== id);
      const saveToLocalStorage = JSON.stringify(deletedCart);
      localStorage.setItem("AppointmentCart", saveToLocalStorage);
      state.cart = deletedCart;
    },
    cartClear: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, getToCart, deleteToCart, cartClear } =
  cartSlice.actions;
export default cartSlice.reducer;
