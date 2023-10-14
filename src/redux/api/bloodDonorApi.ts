import { baseApi } from "./baseApi";

export const bloodDonorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    bloodDonorDetails: build.query({
      query: (id: string) => ({
        url: `/blood-donor/${id}`,
        method: "GET",
      }),
      providesTags: ["donor"],
    }),
    AllBloodDonor: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/blood-donor/all-donor`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["BloodDonor"],
    }),
  }),
});

export const { useBloodDonorDetailsQuery, useAllBloodDonorQuery } =
  bloodDonorApi;
