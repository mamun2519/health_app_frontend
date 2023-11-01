import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myProfile: build.query({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
      providesTags: ["profile", "withdraw"],
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
    updateUserProfile: build.mutation({
      query: (data) => ({
        url: `/user/update`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const {
  useAllUserQuery,
  useAllAdminQuery,
  useMyProfileQuery,
  useUpdateUserProfileMutation,
} = profileApi;
