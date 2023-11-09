"use client";
import Prescription from "@/components/prescription/Prescription";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import DoctorPrescription from "@/components/prescription/DoctorPrescription";
import AllPrescription from "@/components/prescription/AllPrescription";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const ManagePrescription = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/prescription",
      level: "Manage Prescription",
      icons: <MedicalServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  return (
    <div>
      <AllPrescription bread={bread} role={"Admin"} />
    </div>
  );
};

export default ManagePrescription;
