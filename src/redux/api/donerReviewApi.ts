import { baseApi } from "./baseApi";

export const donorReviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDonorReview: build.mutation({
      query: (review) => ({
        url: "/donor-review",
        method: "POST",
        data: review,
      }),
      invalidatesTags: ["donorReview"],
    }),
  }),
});

export const { useCreateDonorReviewMutation } = donorReviewApi;
