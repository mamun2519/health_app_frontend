import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myProfile: build.query({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    allUser: build.query({
      query: () => ({
        url: "/user/all-user",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    AllAdmin: build.query({
      query: () => ({
        url: "/user/all-admin",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),
  }),
});

export const { useAllUserQuery, useAllAdminQuery } = profileApi;
