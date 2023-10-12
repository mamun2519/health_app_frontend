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

    doctorService: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-service/my-service",
        method: "GET",
        params: arg,
      }),
      providesTags: ["doctorService"],
    }),
  }),
});

export const { useUserServiceReviewQuery, useDoctorServiceQuery } =
  doctorServiceApi;
