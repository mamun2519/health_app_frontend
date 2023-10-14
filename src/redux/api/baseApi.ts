// Need to use the React-specific entry point to import createApi
import { URL } from "@/constants/common";
import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "user",
    "donor",
    "appointment",
    "payment",
    "prescription",
    "profile",
    "donorRequest",
    "donorReview",
    "doctorService",
    "googleMeet",
    "Doctor",
    "BloodDonor",
  ],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
