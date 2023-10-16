import { baseApi } from "./baseApi";

export const googleMeetApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myGoogleMeet: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-service/my-active-meet",
        method: "GET",
        params: arg,
      }),
      providesTags: ["googleMeet"],
    }),

    ditelesGoogleMeet: build.query({
      query: (id: string) => ({
        url: `/google-meet/${id}`,
        method: "GET",
      }),
      providesTags: ["googleMeet"],
    }),
    createGoogleMeet: build.mutation({
      query: (data) => ({
        url: `/google-meet`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["googleMeet"],
    }),
    updateGoogleMet: build.mutation({
      query: (data) => ({
        url: `/google-meet/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["googleMeet"],
    }),
    deleteGoogleMeet: build.mutation({
      query: (id) => ({
        url: `/google-meet/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["googleMeet"],
    }),
    JoinDoctor: build.mutation({
      query: (data) => ({
        url: `/meet-request`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["googleMeet"],
    }),
    ActiveGoogleMeet: build.query({
      query: (id: any) => ({
        url: `/doctor-service/active-meet/${id}`,
        method: "GET",
      }),
      // providesTags: ["googleMeet"],
    }),
  }),
});

export const {
  useMyGoogleMeetQuery,
  useDitelesGoogleMeetQuery,
  useCreateGoogleMeetMutation,
  useUpdateGoogleMetMutation,
  useDeleteGoogleMeetMutation,
  useJoinDoctorMutation,
  useActiveGoogleMeetQuery,
} = googleMeetApi;
