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
    allPrescription: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/prescription",
        method: "GET",
        params: arg,
      }),
      providesTags: ["prescription"],
    }),
    doctorPrescription: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-service/my-prescription",
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
    createPrescription: build.mutation({
      query: (data) => ({
        url: `/prescription`,
        method: "POST",
        data,
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
  useCreatePrescriptionMutation,
  useDoctorPrescriptionQuery,
  useAllPrescriptionQuery,
} = prescriptionApi;
