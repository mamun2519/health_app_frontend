"use client";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import {
  useAppointmentDetailsQuery,
  useUpdateAppointmentMutation,
} from "@/redux/api/appointmentApi";
import { SubmitHandler } from "react-hook-form";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/FormProvider";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
const DoctorAppointmentUpdatePage = ({
  params,
}: {
  params: { id: string };
}) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/appointment",
      level: "My Booking Appointment",
      icons: <BreakfastDiningIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/appointment",
      level: "Appointment Edit",
      icons: <SettingsSuggestIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "#d1001c",
    },
  ];
  const { data } = useAppointmentDetailsQuery(params.id);
  const defaultValues = {
    gender: data?.gender || "",
    age: data?.age || "",
    weight: data?.weight || "",
    bloodGroup: data?.bloodGroup || "",

    patientProblem: data?.patientProblem || "",
    report: data?.report || "",
    address: data?.address || "",
  };
  const [updateAppointment] = useUpdateAppointmentMutation();
  const editHandler: SubmitHandler<any> = async (value) => {
    try {
      await updateAppointment({ id: params.id, body: value });
      successMessage({
        message: "Appointment Update Successfully",
        header: "Thank you",
      });
    } catch (error) {}
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit Appointment</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <div className=" grid grid-cols-3 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="gender"
              label="Gender"
              size="lg:w-96 w-72"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="age"
              size="lg:w-96 w-72"
              label="Age"
              placeholder="Enter Your  Location"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="weight"
              size="lg:w-96 w-72"
              label="Weight"
              placeholder="Enter Patient condition"
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className=" mt-8">
            <FormInput
              name="bloodGroup"
              label="Blood Group"
              size="lg:w-96 w-72"
              placeholder="Blood quantity"
            />
          </div>

          <div className=" mt-8">
            <FormInput
              name="patientProblem"
              label="Patient Problem"
              size="lg:w-96 w-72"
              placeholder="Blood quantity"
            />
          </div>
          <div className=" mt-8">
            <FormInput
              name="report"
              label="Report"
              size="lg:w-96 w-72"
              placeholder="Blood quantity"
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className=" mt-2  ">
            <FormInput
              name="address"
              size="lg:w-96 w-72"
              label="Address"
              placeholder="Enter Date"
            />
          </div>
        </div>
        <div className="py-2 w-40 mt-5">
          <button
            type="submit"
            className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
          >
            Edit Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default DoctorAppointmentUpdatePage;
