import * as yup from "yup";

export const singUpSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6).max(32).required(),
  name: yup.object().shape({
    first_name: yup.string().required("First name is a required field"),
    last_name: yup.string().required("Last name is a required field"),
  }),
});
