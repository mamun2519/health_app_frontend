import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PrescriptionDetails from "@/components/prescription/PrescriptionDetails";
import PreviewIcon from "@mui/icons-material/Preview";
const ManagePrescriptionPageDetails = ({
  params,
}: {
  params: { id: string };
}) => {
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
      color: "text.primary",
    },
    {
      link: "/dashboard/Admin/prescription",
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

export default ManagePrescriptionPageDetails;
