import React from "react";

import DonorCard from "./DonorCard";
const DonorComponents = ({ donors }: any) => {
  console.log(donors);
  return (
    <div className=" grid lg:grid-cols-4  grid-cols-1 mt-6 gap-5">
      {donors?.map((donor: any) => (
        <DonorCard key={donor?.id} donor={donor}></DonorCard>
      ))}
    </div>
  );
};

export default DonorComponents;
