import DoctorComponent from "@/components/doctor/DoctorPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Donor App | Doctor",
  description: "Generated by create next app",
};

const DoctorPage = () => {
  return (
    <div>
      <DoctorComponent />
    </div>
  );
};

export default DoctorPage;
