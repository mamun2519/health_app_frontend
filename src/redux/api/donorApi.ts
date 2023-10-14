import { baseApi } from "./baseApi";

export const DonorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    donorRequest: build.mutation({
      query: (donorData) => ({
        url: "/user/request-donor",
        method: "POST",
        data: donorData,
      }),
      invalidatesTags: ["donor"],
    }),

    getMyUserDonorData: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user/my-donor-request",
        method: "GET",
        params: arg,
      }),
      providesTags: ["donor"],
    }),
    getDonorRequestDetails: build.query({
      query: (id: string) => ({
        url: `/blood-donor/request/details/${id}`,
        method: "GET",
      }),
      providesTags: ["donor"],
    }),
    updateDonorRequest: build.mutation({
      query: (data) => ({
        url: `/blood-donor/update-request/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["donor", "donorRequest"],
    }),
    deleteDonorRequest: build.mutation({
      query: (id) => ({
        url: `/blood-donor/request/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donor"],
    }),
    userDonorReview: build.query({
      query: () => ({
        url: `/user/my-donor-review`,
        method: "GET",
      }),
      providesTags: ["donor"],
    }),
    userDonorRequest: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/blood-donor/user-request`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["donorRequest"],
    }),
    allDonorRequest: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/blood-donor/all-request",
        method: "GET",
        params: arg,
      }),
      providesTags: ["donorRequest"],
    }),
  }),
});

export const {
  useDonorRequestMutation,
  useGetMyUserDonorDataQuery,
  useGetDonorRequestDetailsQuery,
  useUpdateDonorRequestMutation,
  useDeleteDonorRequestMutation,
  useUserDonorReviewQuery,
  useUserDonorRequestQuery,
  useAllDonorRequestQuery,
} = DonorApi;
