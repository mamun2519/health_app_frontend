import DoctorServiceDetails from "@/components/doctorService/DoctorServiceDetails";
import { URL } from "@/constants/common";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Appointment - Health Care",
  description: "Generated by create next app",
};
const DoctorServiceDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  // const res = await fetch(`${URL}/doctor-service/${params?.id}`);
  // const service = await res.json();

  return (
    <div>
      <DoctorServiceDetails id={params.id} />
    </div>
  );
};

export default DoctorServiceDetailsPage;