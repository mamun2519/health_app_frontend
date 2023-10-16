// import { createSlice } from "@reduxjs/toolkit";
// const perseCart: any = localStorage.getItem("AppointmentCart");

// const getCart = JSON.parse(perseCart);
// const cartInitialState = {
//   cart: getCart || [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: cartInitialState,
//   reducers: {
//     addToCart: (state, action) => {
//       if (action.payload) {
//         state.cart.push(action.payload);
//         const saveToLocalStorage = JSON.stringify(state.cart);
//         localStorage.setItem("AppointmentCart", saveToLocalStorage);
//       }
//     },

//     getToCart: (state) => {
//       const perseCart: any = localStorage.getItem("AppointmentCart");
//       const getCart = JSON.parse(perseCart);
//       state.cart = getCart || [];
//     },
//     deleteToCart: (state, action) => {
//       const id = action.payload;

//       const deletedCart = state.cart.filter((c: any) => c.id !== id);
//       const saveToLocalStorage = JSON.stringify(deletedCart);
//       localStorage.setItem("AppointmentCart", saveToLocalStorage);
//       state.cart = deletedCart;
//     },
//     cartClear: (state) => {
//       state.cart = [];
//     },
//   },
// });

// export const { addToCart, getToCart, deleteToCart, cartClear } =
//   cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Helper function to safely parse JSON or return a default value
function parseJsonFromLocalStorage(key: string, defaultValue: any) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
    }
  }
  return defaultValue;
}

const cartInitialState = {
  cart: parseJsonFromLocalStorage("AppointmentCart", []),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload) {
        const newCart = [...state.cart, action.payload];
        const saveToLocalStorage = JSON.stringify(newCart);
        localStorage.setItem("AppointmentCart", saveToLocalStorage);
        state.cart = newCart;
      }
    },

    getToCart: (state) => {
      state.cart = parseJsonFromLocalStorage("AppointmentCart", []);
    },

    deleteToCart: (state, action) => {
      const id = action.payload;

      const deletedCart = state.cart.filter((c: { id: any }) => c.id !== id);
      const saveToLocalStorage = JSON.stringify(deletedCart);
      localStorage.setItem("AppointmentCart", saveToLocalStorage);
      state.cart = deletedCart;
    },

    cartClear: (state) => {
      localStorage.removeItem("AppointmentCart");
      state.cart = [];
    },
  },
});

export const { addToCart, getToCart, deleteToCart, cartClear } =
  cartSlice.actions;

export default cartSlice.reducer;
