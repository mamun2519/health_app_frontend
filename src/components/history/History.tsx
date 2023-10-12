"use client";
import React from "react";
import BasicTabs from "./Tab";

import GrainIcon from "@mui/icons-material/Grain";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
const History = () => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/User/appointment",
      level: "My History",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  return (
    <div className="h-[600px]  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>

      <div className="mt-5">
        <BasicTabs />
      </div>
    </div>
  );
};

export default History;
