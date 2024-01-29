"use client";
import Prescription from "@/components/prescription/Prescription";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
const UserPrescriptionPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/User/prescription",
      level: "My Prescription",
      icons: <MedicalServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  const user: any = getUserInfo();
  return (
    <div>
      <Prescription bread={bread} role={user?.role} />
    </div>
  );
};

export default UserPrescriptionPage;
