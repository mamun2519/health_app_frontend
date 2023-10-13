"use client";
import Prescription from "@/components/prescription/Prescription";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import DoctorPrescription from "@/components/prescription/DoctorPrescription";

const DoctorPrescriptionPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/prescription",
      level: "My Prescription",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
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
