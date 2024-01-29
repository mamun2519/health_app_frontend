import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import ManagePayment from "@/components/payment/ManagePayment";
import PaidIcon from "@mui/icons-material/Paid";
const ManagePaymentPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/payment",
      level: "Manage Payment",
      icons: <PaidIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  return (
    <div>
      <ManagePayment bread={bread} role={"Admin"} />
    </div>
  );
};

export default ManagePaymentPage;
