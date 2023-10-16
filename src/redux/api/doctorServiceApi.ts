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
    AllService: build.query({
      query: () => ({
        url: "/doctor-service",
        method: "GET",
      }),
      providesTags: ["doctorService"],
    }),

    doctorService: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-service/my-service",
        method: "GET",
        params: arg,
      }),
      providesTags: ["doctorService"],
    }),
    doctorServiceDetails: build.query({
      query: (arg: { id: string; date: string }) => ({
        url: `/doctor-service/${arg.id}?date=${arg.date}`,
        method: "GET",
        // params: arg.date,
      }),
      providesTags: ["doctorService"],
    }),
    updateDoctorService: build.mutation({
      query: (data) => ({
        url: `/doctor-service/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["doctorService"],
    }),
    createDoctorService: build.mutation({
      query: (data) => ({
        url: `/doctor-service`,
        method: "POST",
        data: data.body,
      }),
      invalidatesTags: ["doctorService"],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/doctor-service/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["doctorService"],
    }),
    getAllDoctor: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/doctor-service/all-doctor`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["Doctor"],
    }),
    serviceReview: build.mutation({
      query: (data) => ({
        url: `/service-review`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["serviceReview"],
    }),
  }),
});

export const {
  useUserServiceReviewQuery,
  useDoctorServiceQuery,
  useDoctorServiceDetailsQuery,
  useUpdateDoctorServiceMutation,
  useDeleteServiceMutation,
  useCreateDoctorServiceMutation,
  useAllServiceQuery,
  useGetAllDoctorQuery,
  useServiceReviewMutation,
} = doctorServiceApi;
