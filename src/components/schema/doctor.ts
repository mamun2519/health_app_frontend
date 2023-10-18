import * as yup from "yup";

export const JoinDoctorSchema = yup.object().shape({
  phoneNumber: yup.string().required(),
  serialNo: yup.string().required(),
});

export const ServiceCreateSchema = yup.object().shape({
  service: yup.object().shape({
    title: yup.string().required("Service title is required"),
    price: yup.string().required("Service price is required"),
    // avatar: yup.string().required("Service avatar is required"),
    serviceType: yup.string().required("Service type is required"),
    // serviceDay: yup
    //   .array()
    //   .of(yup.string())
    //   .required("Service days are required"),
    serviceDay: yup.string().required("serviceDay type is required"),
    category: yup.string().required("Category type is required"),
    aboutSerivce: yup.string().required("About service is required"),
  }),
  salt: yup.object().shape({
    duration: yup.string().required("Duration is required"),
    startTime: yup.string().required("Start time is required"),
    endTime: yup.string().required("End time is required"),
  }),
});

export const createDoctorSchema = yup.object().shape({
  name: yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
  }),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  // avatar: yup.string().url("Invalid URL format").required("Avatar is required"),
  specialist: yup.string().required("Specialist is required"),
  experience: yup.string().required("Experience is required"),
  degree: yup.string().required("Degree is required"),
  date_of_birth: yup.string().required("Date of birth is required"),
  present_Address: yup.object().shape({
    district: yup.string().required("Present district is required"),
    sub_district: yup.string().required("Present sub-district is required"),
    // police_station: yup.string().required("Present police station is required"),
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

// module.exports = createDoctorSchema;
