import { baseApi } from "./baseApi";

export const serviceReviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    serviceReviewById: build.query({
      query: (id: string) => ({
        url: `/service-review/service/${id}`,
        method: "GET",
      }),
      providesTags: ["serviceReview"],
    }),
    allReview: build.query({
      query: () => ({
        url: `/service-review/all-review`,
        method: "GET",
      }),
      providesTags: ["serviceReview"],
    }),
  }),
});

export const { useServiceReviewByIdQuery, useAllReviewQuery } =
  serviceReviewApi;
