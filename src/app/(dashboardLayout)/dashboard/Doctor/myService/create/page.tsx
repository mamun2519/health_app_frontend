"use client";
import React, { useState } from "react";
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
import { yupResolver } from "@hookform/resolvers/yup";
import { ServiceCreateSchema } from "@/components/schema/doctor";
import errorMessage from "@/components/shared/ErrrorMessage";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { uploadToImgBB } from "@/utils/uploadingImgBB";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { ImageUpload } from "@/components/Form/ImageUplaod";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export interface IServiceCrate {
  service: {
    title: string;
    price: string;
    avatar: string;
    serviceType: string;
    serviceDay: any[];
    aboutSerivce: string;
  };
  salt: {
    duration: string;
    startTime: string;
    endTime: string;
  };
}
const CreateDoctorServicePage = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const [error, setErrorMessage] = useState("");
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

  const serviceCreateHandler: SubmitHandler<IServiceCrate> = async (value) => {
    // console.log(value.startTime);
    value.salt.startTime = convertToAmPm(value.salt.startTime);
    value.salt.endTime = convertToAmPm(value.salt.endTime);
    value.service.serviceDay = [value.service.serviceDay];
    value.service.avatar = imageUrl as string;

    try {
      if (imageUrl) {
        const res = await createDoctorService({ body: value }).unwrap();
        console.log(res);
        if (res) {
          successMessage({
            message: "Service Create Successfully",
            header: "Thank you",
          });
          setErrorMessage("");
        } else {
          errorMessage({ message: "something is wrong" });
          setErrorMessage("");
        }
      } else {
        setErrorMessage("Image Is Required");
        setErrorMessage("");
      }
    } catch (error) {
      errorMessage({ message: "something is wrong" });
      console.log(error);
    }
    // console.log(value.startTime);
    // const time = convertToAmPm(value.salt.startTime);
    // console.log(time);
  };

  // console.log(image);
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Create Service</h3>
      <div className="mt-5"></div>
      <Form
        submitHandler={serviceCreateHandler}
        resolver={yupResolver(ServiceCreateSchema)}
      >
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
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
          {/* <div className=" mt-2">
            <FormInput
              name="service.avatar"
              size="lg:w-96 w-72"
              label="Avatar"
              placeholder="Enter Patient avatar"
            />
          </div> */}
          <div className=" mt-2">
            <FormInput
              name="service.serviceType"
              label="service Type"
              size="lg:w-96 w-72"
              placeholder="Enter service Type"
            />
          </div>
        </div>
        <div className="mt-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-8">
            <FormInput
              name="service.aboutSerivce"
              label="AboutService"
              size="lg:w-96 w-72"
              placeholder="Enter AboutService"
            />
          </div>

          <div className=" mt-4">
            <SelectInput
              name="salt.duration"
              label="duration"
              options={Duration}
            />
          </div>
          <div className=" mt-4">
            <SelectInput
              name="service.serviceDay"
              label="Service Day"
              options={Days}
            />
            {/* <FormMultipleSelect /> */}
          </div>
        </div>
        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          <div className=" mt-8 w-full ">
            <div>
              <ImageUpload setImageUrl={setImageUrl} />
              {error && <p className="text-red-500">Image is required</p>}
            </div>
          </div>
          <div className=" mt-8">
            <div>
              {imageUrl && (
                <div>
                  <Avatar
                    alt="Remy Sharp"
                    src={imageUrl}
                    sx={{ width: 86, height: 86 }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
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
