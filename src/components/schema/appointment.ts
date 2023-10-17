import * as yup from "yup";

export const CreateBookAppointmentSchema = yup.object().shape({
  gender: yup.string().required("Gender is required"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age must be a positive number"),
  weight: yup
    .number()
    .required("Weight is required")
    .positive("Weight must be a positive number"),
  bloodGroup: yup.string().required("Blood group is required"),

  patientProblem: yup.string().required("Patient problem is required"),
  //   report: yup.string().required("Report is required"),
  address: yup.string().required("Address is required"),
});
