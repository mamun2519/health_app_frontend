"use client";
import Prescription from "@/components/prescription/Prescription";
import React from "react";

import WhatshotIcon from "@mui/icons-material/Whatshot";

import { getUserInfo } from "@/services/auth.Services";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const DonorPrescriptionPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/prescription",
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

export default DonorPrescriptionPage;
