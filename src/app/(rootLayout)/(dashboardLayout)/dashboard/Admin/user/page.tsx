import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import ManageUser from "@/components/doctor/ManageUser";
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
      link: "/dashboard/Admin/user",
      level: "Manage User",
      icons: <AdminPanelSettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  return (
    <div>
      <ManageUser bread={bread} role={"Admin"} />
    </div>
  );
};

export default ManageUserPage;
