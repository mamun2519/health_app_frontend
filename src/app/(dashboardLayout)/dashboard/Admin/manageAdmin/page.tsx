import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import ManageAdmin from "@/components/ui/ManageAdmin";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
const ManageUserPage = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/manageAdmin",
      level: "Manage Admin",
      icons: <AdminPanelSettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
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
