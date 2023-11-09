"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";

import { SubmitHandler } from "react-hook-form";

import successMessage from "@/components/shared/SuccessMassage";
import { useDoctorServiceQuery } from "@/redux/api/doctorServiceApi";
import FormSelectInput from "@/components/Form/FormSelectInput";

import { useCreateGoogleMeetMutation } from "@/redux/api/googleMeetApi";
import errorMessage from "@/components/shared/ErrrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleMeetCreateSchema } from "@/components/schema/googleMeet";
import CreateIcon from "@mui/icons-material/Create";
import JoinFullIcon from "@mui/icons-material/JoinFull";
interface ICreateMeet {
  serviceId: {
    value: string;
  };
  meetLink: string;
}
const CreateGoogleMeetPage = () => {
  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

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
      level: "Create",
      icons: <CreateIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  const [createGoogleMeet] = useCreateGoogleMeetMutation();
  // const { data } = useMyGoogleMeetQuery({ limit: 1000, page: 1 });
  const { data } = useDoctorServiceQuery({ limit: 100, page: 1 });
  console.log(data);

  const meetLinkOption = data?.map((meet: any) => {
    return {
      label: meet?.title,
      value: meet?.id,
    };
  });

  const editHandler: SubmitHandler<ICreateMeet> = async (value) => {
    const data = {
      meetLink: value.meetLink,
      serviceId: value.serviceId.value,
    };
    try {
      const res = await createGoogleMeet(data);
      console.log(res);
      // @ts-ignore
      if (res.data) {
        successMessage({
          message: "New Meet Link Create Successfully",
          header: "Thank you",
        });
      } else {
        errorMessage({ message: "Your Meet Link already active." });
      }
      console.log(value);
    } catch (error) {
      console.log(error);
    }
    // console.log(value.startTime);
    // const time = convertToAmPm(value.salt.startTime);
    // console.log(time);
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit Service</h3>
      <div className="mt-5"></div>
      <Form
        submitHandler={editHandler}
        resolver={yupResolver(GoogleMeetCreateSchema)}
      >
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="meetLink"
              label="Meet Link"
              size="lg:w-96 w-72"
              placeholder="Enter Your meet Link"
            />
          </div>
          <div className=" mt-">
            <FormSelectInput
              options={meetLinkOption}
              label="Google Meet"
              name="serviceId"
            />
          </div>
        </div>

        <div className="py-2 w-56 mt-5">
          <button
            type="submit"
            className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
          >
            Create Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateGoogleMeetPage;
