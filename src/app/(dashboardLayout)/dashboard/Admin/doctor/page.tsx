import UserPayment from "@/components/payment/UserPayment";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import ManageDoctor from "@/components/doctor/ManageDotor";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
const ManagePaymentPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctor",
      level: "Manage Doctor",
      icons: <PeopleAltIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
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
