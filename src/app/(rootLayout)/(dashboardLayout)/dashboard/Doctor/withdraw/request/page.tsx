"use client";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";

import { SubmitHandler } from "react-hook-form";

import successMessage from "@/components/shared/SuccessMassage";

import { SelectWithdrawMethod } from "@/constants/donor";

import { yupResolver } from "@hookform/resolvers/yup";

import errorMessage from "@/components/shared/ErrrorMessage";
import { styled } from "@mui/material/styles";

import { useWithdrawRequestMutation } from "@/redux/api/withdrawApi";
import { withdrawSchema } from "@/components/schema/withdraw";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import CreateIcon from "@mui/icons-material/Create";
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
      icons: <PublishedWithChangesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/withdraw",
      level: "Request",
      icons: <CreateIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  const [withdrawRequest] = useWithdrawRequestMutation();

  const withdrawRequestHandler: SubmitHandler<IWithdrawCrate> = async (
    value
  ) => {
    const data = {
      paymentReciveType: paymentReceiveType,
      amount: Number(value.amount),
      number: value.number,
    };

    try {
      const res = await withdrawRequest({ body: data }).unwrap();

      if (res) {
        successMessage({
          message: "Withdraw Request Successfully",
          header: "Thank you Doctor",
        });
      } else {
        errorMessage({ message: "something is wrong" });
      }
    } catch (error: any) {
      errorMessage({ message: error?.data });
    }
  };

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
        submitHandler={withdrawRequestHandler}
        resolver={yupResolver(withdrawSchema)}
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
              name="number"
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
