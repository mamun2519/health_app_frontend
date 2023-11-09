import React from "react";

import WhatshotIcon from "@mui/icons-material/Whatshot";

import PrescriptionDetails from "@/components/prescription/PrescriptionDetails";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const DonorPrescriptionPage = ({ params }: { params: { id: string } }) => {
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

  return (
    <div>
      <PrescriptionDetails bread={bread} id={params.id} />
    </div>
  );
};

export default DonorPrescriptionPage;
