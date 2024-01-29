import UserPayment from "@/components/payment/UserPayment";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ManageBloodDonor from "@/components/bloodDonor/ManageDonor";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
      level: "Manage Blood Donor",
      icons: <AccountCircleIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  //   const user: any = getUserInfo();

  return (
    <div>
      <ManageBloodDonor bread={bread} role={"Admin"} />
    </div>
  );
};

export default ManagePaymentPage;
