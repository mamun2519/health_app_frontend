import { baseApi } from "./baseApi";

export const withdrawApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    doctorWithdraw: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-service/my-withdraw",
        method: "GET",
        params: arg,
      }),
      providesTags: ["withdraw"],
    }),
    withdrawDetails: build.query({
      query: (id: string) => ({
        url: `/withdraw/${id}`,
        method: "GET",
      }),
      providesTags: ["withdraw"],
    }),
    updateWithdraw: build.mutation({
      query: (data) => ({
        url: `/withdraw/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["withdraw"],
    }),
    deleteWithdraw: build.mutation({
      query: (id: string) => ({
        url: `/withdraw/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["withdraw"],
    }),
    withdrawRequest: build.mutation({
      query: (data) => ({
        url: "/withdraw",
        method: "POST",
        data: data.body,
      }),
      invalidatesTags: ["withdraw"],
    }),
    allWithdraw: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/withdraw",
        method: "GET",
        params: arg,
      }),
      providesTags: ["withdraw"],
    }),
    acceptedWithdraw: build.mutation({
      query: (id) => ({
        url: `/withdraw/accepted/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["withdraw"],
    }),
  }),
});

export const {
  useAllWithdrawQuery,
  useWithdrawDetailsQuery,
  useWithdrawRequestMutation,
  useDeleteWithdrawMutation,
  useDoctorWithdrawQuery,
  useUpdateWithdrawMutation,
  useAcceptedWithdrawMutation,
} = withdrawApi;
