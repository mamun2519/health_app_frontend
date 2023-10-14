import DoctorDetails from "@/components/doctor/DoctorDetails";
import { URL } from "@/constants/common";
import { Metadata } from "next";
import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import { useUserDetailsQuery } from "@/redux/api/authApi";

const ManageDoctorDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(`${URL}/user/${params.id}`, {
    cache: "no-cache",
  });
  const doctor = await res.json();
  console.log(doctor);
  //   const { data } = useUserDetailsQuery(params.id);
  //   console.log(params);
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
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl"> Doctor Details</h3>
      <div className="mt-5">
        <DoctorDetails doctor={doctor?.data}></DoctorDetails>
      </div>
    </div>
  );
};

export default ManageDoctorDetailsPage;
