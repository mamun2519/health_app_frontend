import { baseApi } from "./baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userPayment: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user/my-payment",
        method: "GET",
        params: arg,
      }),
      providesTags: ["payment"],
    }),

    paymentDetails: build.query({
      query: (id: string) => ({
        url: `/payment/${id}`,
        method: "GET",
      }),
      providesTags: ["payment"],
    }),
    deletePayment: build.mutation({
      query: (id: string) => ({
        url: `/payment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["payment"],
    }),
  }),
});

export const {
  useUserPaymentQuery,
  usePaymentDetailsQuery,
  useDeletePaymentMutation,
} = paymentApi;
