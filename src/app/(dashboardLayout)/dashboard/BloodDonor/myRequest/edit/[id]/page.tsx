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
import errorMessage from "@/components/shared/ErrrorMessage";
const DonorRequestEditPage = ({ params }: { params: { id: string } }) => {
  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/myRequest",
      level: "Donor Request",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/myRequest",
      level: "Edit",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const { data } = useGetDonorRequestDetailsQuery(params.id);
  // @ts-ignore
  const defaultValues = {
    phone: data?.phone || "",
    location: data?.location || "",
    pratienCondition: data?.pratienCondition || "",
    quantity: data?.quantity || "",
    donnetDate: data?.donnetDate || "",
  };
  const [updateDonorRequest] = useUpdateDonorRequestMutation();
  const editHandler: SubmitHandler<IDonorRequest> = async (value) => {
    value.quantity = Number(value.quantity);
    try {
      const res = await updateDonorRequest({
        id: params.id,
        body: value,
      }).unwrap();
      if (res) {
        successMessage({
          message: "Request Update Successfully",
          header: "Thank you",
        });
      } else {
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error) {}
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit Request</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="phone"
              label="Phone"
              size="lg:w-96 w-72"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="location"
              size="lg:w-96 w-72"
              label="Location"
              placeholder="Enter Your  Location"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="pratienCondition"
              size="lg:w-96 w-72"
              label="Patient condition"
              placeholder="Enter Patient condition"
            />
          </div>
        </div>
        <div className="mt-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-8">
            <FormInput
              name="quantity"
              label="Quantity"
              size="lg:w-96 w-72"
              placeholder="Blood quantity"
            />
          </div>
          <div className=" mt-2  ">
            <FormInput
              name="donnetDate"
              size="lg:w-96 w-72"
              label="Donned Date"
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

export default DonorRequestEditPage;
