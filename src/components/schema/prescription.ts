import * as yup from "yup";

const PrescriptionSchema = yup.object().shape({
  //   appointmentId: yup.string().required("Appointment ID is required"),
  title: yup.string().required("Title is required"),
  submitDate: yup.string().required("Submit Date is required"),
  advice: yup.string().required("Advice is required"),
});

const MedicineSchema = yup.object().shape({
  durgName: yup.string().required("Drug Name is required"),
  eatingTime: yup.string().required("Eating Time is required"),
  duration: yup.string().required("Duration is required"),
  //   advice: yup.string().required("Medicine Advice is required"),
  eat: yup.string().required("Eat is required"),
});

const HaltReportSchema = yup.object().shape({
  testName: yup.string().required("Test Name is required"),
  description: yup.string().required("Test Description is required"),
});

const ICreatePrescriptionSchema = yup.object().shape({
  prescription: PrescriptionSchema,
  medicine: MedicineSchema,
  haltReport: HaltReportSchema,
});

export default ICreatePrescriptionSchema;
