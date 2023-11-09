"use client";

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import DoctorPrescription from "@/components/prescription/DoctorPrescription";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const DoctorPrescriptionPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/prescription",
      level: "My Prescription",
      icons: <MedicalServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  const user: any = getUserInfo();

  return (
    <div>
      <DoctorPrescription bread={bread} role={user?.role} />
    </div>
  );
};

export default DoctorPrescriptionPage;
