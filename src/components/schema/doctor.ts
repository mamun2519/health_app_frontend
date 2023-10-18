import * as yup from "yup";

export const JoinDoctorSchema = yup.object().shape({
  phoneNumber: yup.string().required(),
  serialNo: yup.string().required(),
});

export const ServiceCreateSchema = yup.object().shape({
  service: yup.object().shape({
    title: yup.string().required("Service title is required"),
    price: yup.string().required("Service price is required"),
    avatar: yup.string().required("Service avatar is required"),
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
