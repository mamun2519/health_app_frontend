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
    specificReview: build.query({
      query: (id: string) => ({
        url: `/donor-review/specific/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateDonorReviewMutation, useSpecificReviewQuery } =
  donorReviewApi;
