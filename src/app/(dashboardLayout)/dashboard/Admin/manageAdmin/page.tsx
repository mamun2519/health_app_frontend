import UserPayment from "@/components/payment/UserPayment";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { getUserInfo } from "@/services/auth.Services";
import ManagePayment from "@/components/payment/ManagePayment";
import ManageDoctor from "@/components/doctor/ManageDotor";
import ManageUser from "@/components/doctor/ManageUser";
import ManageAdmin from "@/components/ui/ManageAdmin";
const ManageUserPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/manageAdmin",
      level: "Manage Admin",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  //   const user: any = getUserInfo();

  return (
    <div>
      <ManageAdmin bread={bread} role={"Admin"} />
    </div>
  );
};

export default ManageUserPage;
