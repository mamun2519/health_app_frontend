import DonorDetails from "@/components/bloodDonor/DonorDetails";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Donor Details-Health Care",
  description: "Generated by create next app",
};
const BloodDonorDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  // const res = await fetch(`${URL}/blood-donor/${params.id}`, {
  //   cache: "force-cache",
  // });
  // const donor = await res.json();
  // const { data } = useBloodDonorDetailsQuery(id);

  // console.log(donor);
  return (
    <div>
      <DonorDetails id={id} />
    </div>
  );
};

export default BloodDonorDetailsPage;
