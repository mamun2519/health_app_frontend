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
  useDoctorServiceQuery,
  useUpdateDoctorServiceMutation,
} from "@/redux/api/doctorServiceApi";
import FormSelectInput from "@/components/Form/FormSelectInput";
import {
  Days,
  Duration,
  SelectDiscount,
  SelectWithdrawMethod,
  ServiceCategory,
} from "@/constants/donor";
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
import { useCreateOfferMutation } from "@/redux/api/serviceOfferApi";
import SelectDate from "@/components/Form/SelectDate";
import { serviceOfferSchema } from "@/components/schema/serviceOffer";
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

export interface IWithdrawCrate {
  amount: number;
  number: string;
  paymentReciveType: string;
}
const WithdrawRequestPage = () => {
  const [paymentReceiveType, setPaymentReceiveType] = useState("Bikash");
  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/withdraw",
      level: "Withdraw",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/withdraw",
      level: "withdraw Request",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const [createOffer] = useCreateOfferMutation();

  const serviceCreateHandler: SubmitHandler<IWithdrawCrate> = async (value) => {
    try {
      const res = await createOffer({ body: value }).unwrap();
      console.log(res);
      if (res) {
        successMessage({
          message: "Service Create Successfully",
          header: "Thank you",
        });
      } else {
        errorMessage({ message: "something is wrong" });
      }
    } catch (error: any) {
      errorMessage({ message: error?.data });
      console.log(error);
    }
  };

  const { data } = useDoctorServiceQuery({ limit: 100, page: 1 });

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Withdraw Now</h3>
      <div className="mt-5">
        <p>Select Withdraw Methods</p>
        <div className=" grid lg:grid-cols-5  grid-cols-3 gap-3  mt-4">
          {SelectWithdrawMethod.map((method: { value: string }) => (
            <button
              onClick={() => setPaymentReceiveType(method.value)}
              className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                method.value == paymentReceiveType
                  ? "bg-[#d1001c] text-white font-bold"
                  : "bg-[#30029010] "
              }`}
              key={method.value}
            >
              <p>{method.value}</p>
            </button>
          ))}
        </div>
      </div>
      <Form
        submitHandler={serviceCreateHandler}
        resolver={yupResolver(serviceOfferSchema)}
      >
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5">
          <div className=" mt-2 ">
            <FormInput
              name="amount"
              label="Withdraw Balance"
              size="lg:w-96 w-72"
              placeholder="Enter Withdraw Balance"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name=" number"
              size="lg:w-96 w-72"
              label="Account No"
              placeholder="Enter Account No"
            />
          </div>
        </div>

        <div className="py-2 w-56 mt-5">
          <button
            type="submit"
            className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
          >
            Withdraw
          </button>
        </div>
      </Form>
    </div>
  );
};

export default WithdrawRequestPage;
