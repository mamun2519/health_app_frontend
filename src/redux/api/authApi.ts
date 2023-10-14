import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    registerUser: build.mutation({
      query: (RegData) => ({
        url: "/auth/create-user",
        method: "POST",
        data: RegData,
      }),
      invalidatesTags: ["user"],
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
      }),
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Doctor"],
    }),
    userDetails: build.query({
      query: (id: string) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useRegisterUserMutation,
  useResetPasswordMutation,
  useDeleteUserMutation,
  useUserDetailsQuery,
} = authApi;
