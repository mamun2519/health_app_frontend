import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(4).max(32).required(),
});
