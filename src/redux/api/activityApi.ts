import { baseApi } from "./baseApi";

export const activityApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userActivity: build.query({
      query: () => ({
        url: "/activity/user",
        method: "GET",
      }),
      providesTags: ["activity", "appointment", "donorRequest"],
    }),
    donorActivity: build.query({
      query: () => ({
        url: "/activity/donor",
        method: "GET",
      }),
      providesTags: ["activity", "appointment", "donorRequest"],
    }),
    doctorActivity: build.query({
      query: () => ({
        url: "/activity/doctor",
        method: "GET",
      }),
      providesTags: [
        "activity",
        "appointment",
        "doctorService",
        "donorRequest",
        "withdraw",
      ],
    }),
    adminActivity: build.query({
      query: () => ({
        url: "/activity/admin",
        method: "GET",
      }),
      providesTags: [
        "activity",
        "appointment",
        "doctorService",
        "donorRequest",
        "withdraw",
        "donor",
        "Doctor",
        "BloodDonor",
      ],
    }),
  }),
});

export const {
  useAdminActivityQuery,
  useDoctorActivityQuery,
  useUserActivityQuery,
  useDonorActivityQuery,
} = activityApi;
