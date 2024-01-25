import SearchDonor from "@/components/bloodDonor/SearchDonor";

import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Donor Reg - Health Care",
  description: "Generated by create next app",
};
const BloodDonorPage = () => {
  return (
    <div className=" mt-28">
      <SearchDonor />
    </div>
  );
};

export default BloodDonorPage;
