import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myCart: build.query({
      query: () => ({
        url: "/service-offer/myCart",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    addToCart: build.mutation({
      query: (data: any) => ({
        url: "/service-offer/addToCarts",
        method: "POST",
        data,
      }),
      invalidatesTags: ["cart"],
    }),
    removeCart: build.mutation({
      query: (id: string) => ({
        url: `/service-offer/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useMyCartQuery, useAddToCartMutation, useRemoveCartMutation } =
  cartApi;
