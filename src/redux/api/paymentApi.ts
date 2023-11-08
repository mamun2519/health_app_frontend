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
    AllPayment: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/payment",
        method: "GET",
        params: arg,
      }),
      providesTags: ["payment"],
    }),
    doctorPayment: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-service/my-payment",
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
    createPayment: build.mutation({
      query: (data) => ({
        url: `/payment/booking`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["payment"],
    }),
    paymentStripe: build.query({
      query: (price) => ({
        url: `/payment/stripe/${price}`,
        method: "GET",
        // params: arg,
      }),
      // invalidatesTags: ["payment"],
    }),
    applyPromoCode: build.mutation({
      query: (data) => ({
        url: `/payment/apply-promo-code`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["payment"],
    }),
  }),
});

export const {
  useUserPaymentQuery,
  usePaymentDetailsQuery,
  useDeletePaymentMutation,
  useDoctorPaymentQuery,
  useAllPaymentQuery,
  useCreatePaymentMutation,
  usePaymentStripeQuery,
  useApplyPromoCodeMutation,
} = paymentApi;
