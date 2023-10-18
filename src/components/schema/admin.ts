import * as yup from "yup";

export const adminCreateSchema = yup.object().shape({
  name: yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
  }),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  avatar: yup.string().url("Invalid URL format").required("Avatar is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  //   role: yup.string().required("Role is required"),
});
