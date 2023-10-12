import { baseApi } from "./baseApi";

export const prescriptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userPrescription: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user/my-prescription",
        method: "GET",
        params: arg,
      }),
      providesTags: ["prescription"],
    }),
    prescriptionDetails: build.query({
      query: (id: string) => ({
        url: `/prescription/${id}`,
        method: "GET",
      }),
      providesTags: ["prescription"],
    }),
    updatePrescription: build.mutation({
      query: (data) => ({
        url: `/prescription/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["prescription"],
    }),
    deletePrescription: build.mutation({
      query: (id: string) => ({
        url: `/prescription/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["prescription"],
    }),
  }),
});

export const {
  useDeletePrescriptionMutation,
  usePrescriptionDetailsQuery,
  useUpdatePrescriptionMutation,
  useUserPrescriptionQuery,
} = prescriptionApi;
