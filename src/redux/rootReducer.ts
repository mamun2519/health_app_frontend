import { baseApi } from "./api/baseApi";
import cartReducer from "./Slice/cart";
import userReducer from "./Slice/user";
export const reducer = {
  cart: cartReducer,
  user: userReducer,

  [baseApi.reducerPath]: baseApi.reducer,
};
