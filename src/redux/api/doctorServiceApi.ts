import { baseApi } from "./baseApi";

export const doctorServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userServiceReview: build.query({
      query: () => ({
        url: "/user/service-review",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useUserServiceReviewQuery } = doctorServiceApi;
