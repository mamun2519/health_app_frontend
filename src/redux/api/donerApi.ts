import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDonorReview: build.mutation({
      query: (review) => ({
        url: "/auth/login",
        method: "POST",
        data: review,
      }),
      invalidatesTags: ["donorReview"],
    }),
  }),
});

export const { useCreateDonorReviewMutation } = authApi;
