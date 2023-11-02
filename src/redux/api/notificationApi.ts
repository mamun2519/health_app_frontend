import { baseApi } from "./baseApi";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myNotification: build.query({
      query: () => ({
        url: "/user/my-notification",
        method: "GET",
      }),
      providesTags: ["notification"],
    }),

    deleteNotification: build.mutation({
      query: (id: string) => ({
        url: `/notification/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});

export const { useMyNotificationQuery, useDeleteNotificationMutation } =
  notificationApi;
