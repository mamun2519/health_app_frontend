import UserPaymentDetails from "@/components/payment/UserPaymentDetails";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
const DoctorPaymentPageDetails = ({ params }: { params: { id: string } }) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/payment",
      level: "Payment",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/payment",
      level: "Details",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "text.primary",
    },
  ];
  return (
    <div>
      <UserPaymentDetails bread={bread} id={params.id} />
    </div>
  );
};

export default DoctorPaymentPageDetails;
