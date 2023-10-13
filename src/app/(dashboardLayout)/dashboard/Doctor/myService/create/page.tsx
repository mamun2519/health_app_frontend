"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";
import {
  useGetDonorRequestDetailsQuery,
  useUpdateDonorRequestMutation,
} from "@/redux/api/donorApi";
import { SubmitHandler } from "react-hook-form";
import { IDonorRequest } from "@/components/dialog/AddDonorRequest";
import successMessage from "@/components/shared/SuccessMassage";
import {
  useCreateDoctorServiceMutation,
  useDoctorServiceDetailsQuery,
  useUpdateDoctorServiceMutation,
} from "@/redux/api/doctorServiceApi";
import FormSelectInput from "@/components/Form/FormSelectInput";
import { Days, Duration, ServiceCategory } from "@/constants/donor";
import SelectInput from "@/components/Form/SelectInput";
import { DatePicker } from "@mui/x-date-pickers";
import FromTimePicker from "@/components/Form/FromTimePicker";
import { convertToAmPm } from "@/utils/timeConvater";
import FormMultipleSelect from "@/components/Form/FomMultipleSelect";

interface IServiceCrate {
  service: {
    title: string;
    price: string;
    avatar: string;
    serviceType: string;
    serviceDay: string[];
    aboutSerivce: string;
  };
  salt: {
    duration: string;
    startTime: string;
    endTime: string;
  };
}
const CreateDoctorServicePage = () => {
  const [updateDoctorService] = useUpdateDoctorServiceMutation();
  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/myService",
      level: "My Service",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/myService",
      level: "Create",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const [createDoctorService] = useCreateDoctorServiceMutation();

  const editHandler: SubmitHandler<IServiceCrate> = async (value) => {
    // console.log(value.startTime);
    value.salt.startTime = convertToAmPm(value.salt.startTime);
    value.salt.endTime = convertToAmPm(value.salt.endTime);
    value.service.serviceDay = ["Saturday"];
    try {
      await createDoctorService({ body: value });
      successMessage({
        message: "Service Create Successfully",
        header: "Thank you",
      });
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
      <Form submitHandler={editHandler}>
        <div className=" grid grid-cols-3 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="service.title"
              label="Title"
              size="lg:w-96 w-72"
              placeholder="Enter Your  title"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="service.price"
              size="lg:w-96 w-72"
              label="price"
              placeholder="Enter price "
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="service.avatar"
              size="lg:w-96 w-72"
              label="Avatar"
              placeholder="Enter Patient avatar"
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className=" mt-8">
            <FormInput
              name="service.serviceType"
              label="service Type"
              size="lg:w-96 w-72"
              placeholder="Enter service Type"
            />
          </div>

          <div className=" mt-4">
            {/* <FormInput
              name="service.serviceDay"
              label="service Day"
              size="lg:w-96 w-72"
              placeholder="Enter serviceDay"
            /> */}
            <SelectInput
              name="service.serviceDay"
              label="Service Day"
              options={Days}
            />
            {/* <FormMultipleSelect /> */}
          </div>
          <div className=" mt-8">
            <FormInput
              name="service.aboutSerivce"
              label="AboutService"
              size="lg:w-96 w-72"
              placeholder="Enter AboutService"
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className=" mt-8">
            {/* <FormSelectInput
              name="service.category"
              label="serviceType"
              size="lg:w-96 w-72 "
              options={ServiceCategory}
              placeholder="Enter serviceType"
            /> */}
            <SelectInput
              name="salt.duration"
              label="duration"
              options={Duration}
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className=" mt-8">
            <FromTimePicker
              name="salt.startTime"
              label="Start Time"
              size="lg:w-96 w-72"
              placeholder="Enter endTime"
            />
          </div>
          <div className=" mt-8">
            <FromTimePicker
              name="salt.endTime"
              label="End Time"
              size="lg:w-96 w-72"
              placeholder="Enter endTime"
            />
          </div>
          <div className=" mt-8">
            {/* <FormSelectInput
              name="service.category"
              label="serviceType"
              size="lg:w-96 w-72 "
              options={ServiceCategory}
              placeholder="Enter serviceType"
            /> */}
            <SelectInput
              name="service.category"
              label="Category"
              options={ServiceCategory}
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

export default CreateDoctorServicePage;
