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
  }),
});

export const { useMyNotificationQuery } = notificationApi;
