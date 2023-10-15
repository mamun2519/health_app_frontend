import { baseApi } from "./api/baseApi";
import cartReducer from "./Slice/cart";
export const reducer = {
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
