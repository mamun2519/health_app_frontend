import UserPayment from "@/components/payment/UserPayment";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import ManagePayment from "@/components/payment/ManagePayment";
import ManageDoctor from "@/components/doctor/ManageDotor";
const ManagePaymentPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctor",
      level: "Manage Doctor",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  //   const user: any = getUserInfo();

  return (
    <div>
      <ManageDoctor bread={bread} role={"Admin"} />
    </div>
  );
};

export default ManagePaymentPage;
