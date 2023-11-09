"use client";
import UserPayment from "@/components/payment/UserPayment";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import PaidIcon from "@mui/icons-material/Paid";
const UserAppointmentPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/User/payment",
      level: "Payment",
      icons: <PaidIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  //
  const user: any = getUserInfo();

  return (
    <div>
      <UserPayment bread={bread} role={user?.role} />
    </div>
  );
};

export default UserAppointmentPage;
