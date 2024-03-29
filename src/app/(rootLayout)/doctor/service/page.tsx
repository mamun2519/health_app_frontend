import DoctorServiceComponent from "@/components/doctorService/DoctorServiceComponent";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Service - Health Care",
  description: "Generated by create next app",
};

const DoctorServicePage = () => {
  return (
    <div>
      <DoctorServiceComponent />
    </div>
  );
};

export default DoctorServicePage;
