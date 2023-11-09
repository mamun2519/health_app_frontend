"use client";

import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import { getUserInfo } from "@/services/auth.Services";
import DoctorPayment from "@/components/payment/DoctorPayment";
import PaidIcon from "@mui/icons-material/Paid";
const DoctorPaymentPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/payment",
      level: "User Payment",
      icons: <PaidIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const user: any = getUserInfo();

  return (
    <div>
      <DoctorPayment bread={bread} role={user?.role} />
    </div>
  );
};

export default DoctorPaymentPage;
