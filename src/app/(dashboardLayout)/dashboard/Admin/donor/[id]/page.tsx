import DoctorDetails from "@/components/doctor/DoctorDetails";
import { URL } from "@/constants/common";
import { Metadata } from "next";
import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import { useUserDetailsQuery } from "@/redux/api/authApi";
import DonorDetails from "@/components/bloodDonor/DonorDetails";
import ManageBloodDonorDetails from "@/components/bloodDonor/ManageDonorDetails";

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
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/donor",
      level: "Manage Doctor",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
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
