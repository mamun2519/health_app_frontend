import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  cart: any[];
}

const cartInitialState: ICart = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload) {
        // state.cart.push(action.payload);
        // const saveToLocalStorage = JSON.stringify(state.cart);
        // localStorage.setItem("AppointmentCart", saveToLocalStorage);
      }
    },

    getToCart: (state) => {
      // const perseCart: any = localStorage.getItem("AppointmentCart");
      // const getCart = JSON.parse(perseCart);
      // state.cart = getCart || [];
    },
    deleteToCart: (state, action) => {
      // const id = action.payload;
      // const deletedCart = state.cart.filter((c: any) => c.id !== id);
      // const saveToLocalStorage = JSON.stringify(deletedCart);
      // localStorage.setItem("AppointmentCart", saveToLocalStorage);
      // state.cart = deletedCart;
    },
    cartClear: (state) => {
      state.cart = [];
    },
    setToCart: (state: any) => {
      // const perseCart: any = localStorage.getItem("AppointmentCart");

      // const getCart = JSON.parse(perseCart);
      state.cart = localStorage.getItem("AppointmentCart") || [];
    },
  },
});

export const { addToCart, getToCart, deleteToCart, cartClear, setToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
