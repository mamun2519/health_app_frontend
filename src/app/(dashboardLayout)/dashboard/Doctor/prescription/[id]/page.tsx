import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";

import PrescriptionDetails from "@/components/prescription/PrescriptionDetails";
const DoctorPrescriptionDetailsPage = ({
  params,
}: {
  params: { id: string };
}) => {
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
    {
      link: "/dashboard/Doctor/prescription",
      level: "Details",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  return (
    <div>
      <PrescriptionDetails bread={bread} id={params.id} />
    </div>
  );
};

export default DoctorPrescriptionDetailsPage;
