import { baseApi } from "./baseApi";

export const serviceOfferApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    doctorServiceOffer: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/service-offer/doctor-offer",
        method: "GET",
        params: arg,
      }),
      providesTags: ["serviceOffer"],
    }),
    serviceOfferDetails: build.query({
      query: (id: string) => ({
        url: `/service-offer/${id}`,
        method: "GET",
      }),
      providesTags: ["serviceOffer"],
    }),
    updateServiceOffer: build.mutation({
      query: (data) => ({
        url: `/service-offer/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["serviceOffer"],
    }),
    deleteServiceOffer: build.mutation({
      query: (id: string) => ({
        url: `/service-offer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["serviceOffer"],
    }),
    createOffer: build.mutation({
      query: (data) => ({
        url: "/service-offer",
        method: "POST",
        data: data.body,
      }),
      invalidatesTags: ["serviceOffer"],
    }),
    allServiceOffer: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/service-offer",
        method: "GET",
        params: arg,
      }),
      providesTags: ["appointment"],
    }),
  }),
});

export const {
  useAllServiceOfferQuery,
  useCreateOfferMutation,
  useUpdateServiceOfferMutation,
  useDeleteServiceOfferMutation,
  useServiceOfferDetailsQuery,
  useDoctorServiceOfferQuery,
} = serviceOfferApi;
