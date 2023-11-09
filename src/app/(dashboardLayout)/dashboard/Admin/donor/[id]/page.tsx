import React from "react";

import IconBreadcrumbs from "@/components/ui/Breadcrumb";

import ManageBloodDonorDetails from "@/components/bloodDonor/ManageDonorDetails";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
const ManageDoctorDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  //   console.log(params);
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/donor",
      level: "Manage Donor Details",
      icons: <AccountCircleIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl"> Blood Donor Details</h3>
      <div className="mt-5">
        <ManageBloodDonorDetails id={params.id} />
      </div>
    </div>
  );
};

export default ManageDoctorDetailsPage;
