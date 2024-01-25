import DonorRegistrationForm from "@/components/bloodDonor/DonorRegistrationForm";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Donor Reg - Health Care",
  description: "Generated by create next app",
};
const DonorRegistrationPage = () => {
  return (
    <div>
      <DonorRegistrationForm></DonorRegistrationForm>
    </div>
  );
};

export default DonorRegistrationPage;
