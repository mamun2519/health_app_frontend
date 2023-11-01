import * as yup from "yup";

export const withdrawSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("balance must be a number")
    .required("Balance is required"),
  number: yup.string().required("Account Name is a required field"),
});
