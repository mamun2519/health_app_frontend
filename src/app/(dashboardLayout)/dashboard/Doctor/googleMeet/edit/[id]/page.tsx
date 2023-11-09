"use client";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import successMessage from "@/components/shared/SuccessMassage";
import { SubmitHandler } from "react-hook-form";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/FormProvider";
import FormSelectInput from "@/components/Form/FormSelectInput";
import { MeetStatus } from "@/constants/donor";
import {
  useDitelesGoogleMeetQuery,
  useUpdateGoogleMetMutation,
} from "@/redux/api/googleMeetApi";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
interface IGoogleMeet {
  meetLink: string;
  status: {
    value: string;
  };
}
const DoctorAppointmentUpdatePage = ({
  params,
}: {
  params: { id: string };
}) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/googleMeet",
      level: "Google Meet",
      icons: <JoinFullIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/googleMeet",
      level: " Edit",
      icons: <SettingsSuggestIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "#d1001c",
    },
  ];
  const { data } = useDitelesGoogleMeetQuery(params.id);
  const defaultValues = {
    meetLink: data?.meetLink || "",
    status: data?.status || "",
  };
  const [updateGoogleMet] = useUpdateGoogleMetMutation();
  const editHandler: SubmitHandler<IGoogleMeet> = async (value) => {
    const data = {
      id: params.id,
      body: {
        status: value.status.value,
        meetLink: value.meetLink,
      },
    };
    try {
      await updateGoogleMet(data);
      successMessage({
        message: "Google Meet Link Update Successfully",
        header: "Thank you",
      });
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit GoogleMeet</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="meetLink"
              label="MeetLink"
              size="lg:w-96 w-72"
              placeholder="Enter meetLink"
            />
          </div>
          <div className=" mt-">
            <FormSelectInput
              options={MeetStatus}
              label="Google Meet"
              name="status"
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
