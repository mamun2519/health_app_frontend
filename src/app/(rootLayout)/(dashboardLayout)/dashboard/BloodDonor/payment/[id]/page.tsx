import UserPaymentDetails from "@/components/payment/UserPaymentDetails";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import PreviewIcon from "@mui/icons-material/Preview";
const DonorPaymentDetailsPage = ({ params }: { params: { id: string } }) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/payment",
      level: "Payment",
      icons: <PaidIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/payment",
      level: "Details",
      icons: <PreviewIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "#d1001c",
    },
  ];
  return (
    <div>
      <UserPaymentDetails bread={bread} id={params.id} />
    </div>
  );
};

export default DonorPaymentDetailsPage;
