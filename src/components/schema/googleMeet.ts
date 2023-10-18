import * as yup from "yup";

export const GoogleMeetCreateSchema = yup.object().shape({
  //   appointmentId: yup.string().required("Appointment ID is required"),

  //   serviceId: yup.object().shape({
  //     value: yup.string().required("Service ID is required"),
  //   }),

  meetLink: yup.string().required("meet link Date is required"),
});
