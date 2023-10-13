"use client";
import UserPayment from "@/components/payment/UserPayment";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import DoctorPayment from "@/components/payment/DoctorPayment";
const DoctorPaymentPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/payment",
      level: "User Payment",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const user: any = getUserInfo();
  console.log(user);
  return (
    <div>
      <DoctorPayment bread={bread} role={user?.role} />
    </div>
  );
};

export default DoctorPaymentPage;
