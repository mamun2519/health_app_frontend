import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(4).max(32).required(),
});

export const ForgetEmailValidation = yup.object().shape({
  email: yup.string().required(),
});

export const CodeSchema = yup.object().shape({
  codeBox2: yup.string().min(1).max(1).required(),
  codeBox1: yup.string().min(1).max(1).required(),
  codeBox3: yup.string().min(1).max(1).required(),
  codeBox4: yup.string().min(1).max(1).required(),
});

export const forgetPasswordSchema = yup.object().shape({
  password: yup.string().min(4).max(32).required("Password Is Required"),
  newPassword: yup
    .string()
    .min(4)
    .max(32)
    .required("Confirm Password is Required"),
});
