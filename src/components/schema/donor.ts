import * as yup from "yup";

export const createDonorSchema = yup.object().shape({
  name: yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
  }),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  //   avatar: yup.string().url("Invalid URL format").required("Avatar is required"),
  date_of_birth: yup.string().required("Date of birth is required"),
  present_Address: yup.object().shape({
    district: yup.string().required("Present district is required"),
    sub_district: yup.string().required("Present sub-district is required"),
    //     police_station: yup.string().required("Present police station is required"),
    address: yup.string().required("Present address is required"),
  }),
  blood_group: yup.string().required("Blood group is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Invalid phone number")
    .required("Phone number is required"),
  gender: yup
    .string()
    .oneOf(["Male", "Female", "Other"], "Invalid gender")
    .required("Gender is required"),
});
