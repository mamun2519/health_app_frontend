import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PrescriptionDetails from "@/components/prescription/PrescriptionDetails";
import PreviewIcon from "@mui/icons-material/Preview";
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
      icons: <MedicalServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/prescription",
      level: "Details",
      icons: <PreviewIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  return (
    <div>
      <PrescriptionDetails bread={bread} id={params.id} />
    </div>
  );
};

export default DoctorPrescriptionDetailsPage;
