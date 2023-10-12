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
  }),
});

export const { useBloodDonorDetailsQuery } = bloodDonorApi;
