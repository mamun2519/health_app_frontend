import { baseApi } from "./baseApi";

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userAppointment: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user/my-appointment",
        method: "GET",
        params: arg,
      }),
      providesTags: ["appointment"],
    }),
    appointmentDetails: build.query({
      query: (id: string) => ({
        url: `/appointment/${id}`,
        method: "GET",
      }),
      providesTags: ["appointment"],
    }),
    updateAppointment: build.mutation({
      query: (data) => ({
        url: `/appointment/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["appointment"],
    }),
    deleteAppointment: build.mutation({
      query: (id: string) => ({
        url: `/appointment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["appointment"],
    }),
  }),
});

export const {
  useUserAppointmentQuery,
  useAppointmentDetailsQuery,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApi;
