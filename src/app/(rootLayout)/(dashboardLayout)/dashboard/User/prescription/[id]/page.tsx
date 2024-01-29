import PrescriptionDetails from "@/components/prescription/PrescriptionDetails";
import Prescription from "@/components/prescription/Prescription";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const PrescriptionDetailsPage = ({ params }: { params: { id: string } }) => {
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

  return (
    <div>
      <PrescriptionDetails bread={bread} id={params.id} />
    </div>
  );
};

export default PrescriptionDetailsPage;
