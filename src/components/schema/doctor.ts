import * as yup from "yup";

export const JoinDoctorSchema = yup.object().shape({
  phoneNumber: yup.string().required(),
  serialNo: yup.string().required(),
});
