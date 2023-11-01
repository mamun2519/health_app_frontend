import * as yup from "yup";

export const serviceOfferSchema = yup.object().shape({
  offerTitle: yup.string().required("Offer Title is required"),
  promoCode: yup.string().required("Promo Code is required"),
  //   expireDate: yup.any().required("Expire Date is required"),
  discount: yup
    .number()
    .typeError("Discount must be a number")
    .required("Discount is required")
    .min(0, "Discount must be at least 0")
    .max(100, "Discount cannot exceed 100"),
  serviceId: yup.string().required("Service  is required"),
});
